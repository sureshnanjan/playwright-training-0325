// email-client.js
import Imap from 'imap';
import { simpleParser } from 'mailparser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.resolve(__dirname, 'cacert.pem'));
// Configuration - Replace these with your email credentials
const config = {
  user: `${process.env.GMAIL_USER}`,
  password: `${process.env.GMAIL_PWD}`,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: {
      ca: fs.readFileSync(path.resolve(__dirname, 'cacert.pem')),
      rejectUnauthorized: false,
      minVersion: "TLSv1"
    },
  protocol: 'IMAP',
  encryption: 'SSL/TLS',
  authentication: 'normal password',
   // Mailbox to open
  mailbox: 'INBOX',
  // Folder to save emails and attachments
  saveDirectory: path.join(__dirname, 'downloaded_emails'),
 
  // Email filtering options
  filter: {
    // Set to true to only fetch unread emails
    onlyUnread: true,
    // Maximum number of emails to fetch (most recent first)
    maxEmails: 10,
    // Search criteria - leave empty for all emails
    // See https://github.com/mscdex/node-imap#fetch for search options
    searchCriteria: [],
    // Days to look back (0 for all)
    daysBack: 7
  },
  
  // Validation rules for emails
  validators: {
    minSubjectLength: 100,
    requiredFields: ['from', 'subject', 'date'],
    blockedDomains: ['spam.com', 'phishing.org'],
    allowedAttachmentTypes: ['pdf', 'jpg', 'png', 'doc', 'docx', 'xls', 'xlsx'],
    maxAttachmentSize: 5 * 1024 * 1024, // 5MB
  }
};

// Create directories for saving if they don't exist
if (!fs.existsSync(config.saveDirectory)) {
  fs.mkdirSync(config.saveDirectory, { recursive: true });
}

// Email validation functions
const validators = {
  // Check if all required fields are present
  checkRequiredFields: (email) => {
    const missing = config.validators.requiredFields.filter(field => 
      !email[field] || (typeof email[field] === 'string' && email[field].trim() === '')
    );
    
    if (missing.length > 0) {
      return {
        valid: false,
        reason: `Missing required fields: ${missing.join(', ')}`
      };
    }
    return { valid: true };
  },
  
  // Check minimum subject length
  checkSubjectLength: (email) => {
    if (email.subject && email.subject.length < config.validators.minSubjectLength) {
      return {
        valid: false,
        reason: `Subject too short (minimum ${config.validators.minSubjectLength} characters)`
      };
    }
    return { valid: true };
  },
  
  // Check if sender is from a blocked domain
  checkBlockedDomains: (email) => {
    if (!email.from || !email.from.value || email.from.value.length === 0) {
      return { valid: true }; // Skip if no from field
    }
    
    const senderDomain = email.from.value[0].address.split('@')[1];
    if (config.validators.blockedDomains.includes(senderDomain)) {
      return {
        valid: false,
        reason: `Sender domain ${senderDomain} is blocked`
      };
    }
    return { valid: true };
  },
  
  // Check attachments size and type
  checkAttachments: (email) => {
    if (!email.attachments || email.attachments.length === 0) {
      return { valid: true }; // No attachments
    }
    
    for (const attachment of email.attachments) {
      // Check file size
      if (attachment.size > config.validators.maxAttachmentSize) {
        return {
          valid: false,
          reason: `Attachment ${attachment.filename} exceeds maximum size of ${config.validators.maxAttachmentSize / (1024 * 1024)}MB`
        };
      }
      
      // Check file type
      const fileExt = path.extname(attachment.filename).toLowerCase().substring(1);
      if (!config.validators.allowedAttachmentTypes.includes(fileExt)) {
        return {
          valid: false,
          reason: `Attachment type ${fileExt} is not allowed`
        };
      }
    }
    
    return { valid: true };
  }
};

// Save email to disk
function saveEmail(email, validationResult) {
  // Create a sanitized filename
  const sanitizedSubject = (email.subject || 'no-subject')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .substring(0, 30);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const sender = email.from ? email.from.value[0].address.replace(/[<>@]/g, '_') : 'unknown';
  const filename = `${timestamp}_${sender}_${sanitizedSubject}`;
  
  // Save email metadata and content
  const metadataPath = path.join(config.saveDirectory, `${filename}.json`);
  
  // Create a sanitized copy of the email for saving
  const emailToSave = {
    messageId: email.messageId,
    from: email.from,
    to: email.to,
    cc: email.cc,
    subject: email.subject,
    date: email.date,
    attachments: email.attachments ? email.attachments.map(att => ({
      filename: att.filename,
      contentType: att.contentType,
      size: att.size
    })) : [],
    validationResult
  };
  
  fs.writeFileSync(metadataPath, JSON.stringify(emailToSave, null, 2));
  
  // Save email text content
  if (email.text) {
    fs.writeFileSync(path.join(config.saveDirectory, `${filename}.txt`), email.text);
  }
  
  // Save email HTML content if available
  if (email.html) {
    fs.writeFileSync(path.join(config.saveDirectory, `${filename}.html`), email.html);
  }
  
  console.log(`Email saved to ${metadataPath}`);
  
  // If there are attachments, save them too
  if (email.attachments && email.attachments.length > 0) {
    const attachmentDir = path.join(config.saveDirectory, `${filename}_attachments`);
    fs.mkdirSync(attachmentDir, { recursive: true });
    
    email.attachments.forEach((attachment, index) => {
      const attachmentPath = path.join(attachmentDir, attachment.filename);
      fs.writeFileSync(attachmentPath, attachment.content);
      console.log(`Attachment saved to ${attachmentPath}`);
    });
  }
  
  return filename;
}

// Validate email
function validateEmail(email) {
  // Run all validators
  const validationResults = [];
  for (const [name, validator] of Object.entries(validators)) {
    const result = validator(email);
    if (!result.valid) {
      validationResults.push({ name, ...result });
    }
  }
  
  const validationResult = {
    valid: validationResults.length === 0,
    errors: validationResults
  };
  
  // Log validation result
  if (validationResult.valid) {
    console.log('Email validation: PASSED');
  } else {
    console.log('Email validation: FAILED', validationResult.errors);
  }
  
  return validationResult;
}

// Process emails
function processEmails() {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);
    const processedEmails = [];
    
    function openInbox(cb) {
      imap.openBox(config.mailbox, false, cb);
    }
    
    imap.once('ready', () => {
      openInbox((err, box) => {
        if (err) {
          reject(err);
          return;
        }
        
        console.log(`Mailbox opened: ${config.mailbox}`);
        console.log(`Total messages: ${box.messages.total}`);
        
        // Build search criteria based on configuration
        let searchCriteria = config.filter.searchCriteria;
        
        // Add date criteria if specified
        if (config.filter.daysBack > 0) {
          const dateBack = new Date();
          dateBack.setDate(dateBack.getDate() - config.filter.daysBack);
          searchCriteria = searchCriteria.concat(['SINCE', dateBack]);
        }
        
        // For empty criteria, search all emails
        if (searchCriteria.length === 0) {
          searchCriteria = [ 'UNSEEN', ['SINCE', 'May 17, 2025'] ];
        }
        
        console.log('Searching with criteria:', searchCriteria);
        
        // Search for messages
        imap.search(['UNSEEN', ['SINCE', 'May 17, 2025']]
, (err, results) => {
          if (err) {
            reject(err);
            return;
          }
          
          console.log(`Found ${results.length} messages matching criteria`);
          
          // No messages found
          if (results.length === 0) {
            imap.end();
            resolve([]);
            return;
          }
          
          // Limit number of results based on config
          if (config.filter.maxEmails > 0 && results.length > config.filter.maxEmails) {
            // Sort results to get newest messages first (typically highest UIDs)
            results.sort((a, b) => b - a);
            results = results.slice(0, config.filter.maxEmails);
            console.log(`Limited to ${results.length} newest messages`);
          }
          
          // Fetch emails
          const fetch = imap.fetch(results, {
            bodies: '',
            markSeen: !config.filter.onlyUnread // Mark as read unless we only want unread
          });
          
          fetch.on('message', (msg, seqno) => {
            console.log(`Processing message #${seqno}`);
            
            msg.on('body', (stream, info) => {
              // Parse email
              simpleParser(stream)
                .then(email => {
                  console.log(`Email #${seqno}: "${email.subject}" from ${email.from?.text}`);
                  
                  // Validate email
                  const validationResult = validateEmail(email);
                  
                  // Save email
                  const filename = saveEmail(email, validationResult);
                  
                  // Add to processed list
                  processedEmails.push({
                    seqno,
                    messageId: email.messageId,
                    subject: email.subject,
                    from: email.from?.text,
                    date: email.date,
                    filename,
                    validationResult
                  });
                })
                .catch(err => {
                  console.error(`Error parsing message #${seqno}:`, err);
                });
            });
          });
          
          fetch.once('error', err => {
            console.error('Fetch error:', err);
            reject(err);
          });
          
          fetch.once('end', () => {
            console.log('Done fetching messages');
            imap.end();
          });
        });
      });
    });
    
    imap.once('error', err => {
      console.error('IMAP error:', err);
      reject(err);
    });
    
    imap.once('end', () => {
      console.log('IMAP connection ended');
      resolve(processedEmails);
    });
    
    imap.connect();
  });
}

// Mark emails as read/unread
function markEmails(uids, markAsRead = true) {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);
    
    imap.once('ready', () => {
      imap.openBox(config.mailbox, false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }
        
        const flagOperation = markAsRead ? '+FLAGS' : '-FLAGS';
        imap.setFlags(uids, flagOperation, ['\\Seen'], (err) => {
          if (err) {
            reject(err);
            return;
          }
          
          console.log(`Successfully marked ${uids.length} emails as ${markAsRead ? 'read' : 'unread'}`);
          imap.end();
          resolve(true);
        });
      });
    });
    
    imap.once('error', err => {
      console.error('IMAP error:', err);
      reject(err);
    });
    
    imap.once('end', () => {
      console.log('IMAP connection ended');
    });
    
    imap.connect();
  });
}

// Delete emails
function deleteEmails(uids) {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);
    
    imap.once('ready', () => {
      imap.openBox(config.mailbox, false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }
        
        // First mark them as deleted
        imap.setFlags(uids, '+FLAGS', ['\\Deleted'], (err) => {
          if (err) {
            reject(err);
            return;
          }
          
          // Then expunge to actually remove them
          imap.expunge((err) => {
            if (err) {
              reject(err);
              return;
            }
            
            console.log(`Successfully deleted ${uids.length} emails`);
            imap.end();
            resolve(true);
          });
        });
      });
    });
    
    imap.once('error', err => {
      console.error('IMAP error:', err);
      reject(err);
    });
    
    imap.once('end', () => {
      console.log('IMAP connection ended');
    });
    
    imap.connect();
  });
}

// Move emails to another folder
function moveEmails(uids, destination) {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);
    
    imap.once('ready', () => {
      imap.openBox(config.mailbox, false, (err, box) => {
        if (err) {
          reject(err);
          return;
        }
        
        imap.move(uids, destination, (err) => {
          if (err) {
            reject(err);
            return;
          }
          
          console.log(`Successfully moved ${uids.length} emails to ${destination}`);
          imap.end();
          resolve(true);
        });
      });
    });
    
    imap.once('error', err => {
      console.error('IMAP error:', err);
      reject(err);
    });
    
    imap.once('end', () => {
      console.log('IMAP connection ended');
    });
    
    imap.connect();
  });
}

// List available mailboxes
function listMailboxes() {
  return new Promise((resolve, reject) => {
    const imap = new Imap(config);
    const mailboxes = [];
    
    imap.once('ready', () => {
      imap.getBoxes((err, boxes) => {
        if (err) {
          reject(err);
          return;
        }
        
        // Process mailbox list recursively
        function processBoxes(boxes, path = '') {
          Object.keys(boxes).forEach(key => {
            const fullPath = path ? `${path}${key}` : key;
            mailboxes.push({
              name: key,
              path: fullPath,
              flags: boxes[key].attribs || [],
              hasChildren: boxes[key].children ? true : false
            });
            
            if (boxes[key].children) {
              processBoxes(boxes[key].children, `${fullPath}${boxes[key].delimiter}`);
            }
          });
        }
        
        processBoxes(boxes);
        console.log('Available mailboxes:', mailboxes.map(box => box.path).join(', '));
        
        imap.end();
        resolve(mailboxes);
      });
    });
    
    imap.once('error', err => {
      console.error('IMAP error:', err);
      reject(err);
    });
    
    imap.once('end', () => {
      console.log('IMAP connection ended');
    });
    
    imap.connect();
  });
}

// Main function to run the email client
async function main() {
  try {
    console.log('Email Client starting...');
    console.log(`Connecting to ${config.host} as ${config.user}`);
    
    // List available mailboxes
    const mailboxes = await listMailboxes();
    
    // Process emails
    console.log(`Processing emails from ${config.mailbox}...`);
    const processedEmails = await processEmails();
    
    console.log('\nEmail processing summary:');
    console.log(`- Processed ${processedEmails.length} emails`);
    
    const validEmails = processedEmails.filter(email => email.validationResult.valid);
    console.log(`- Valid emails: ${validEmails.length}`);
    console.log(`- Invalid emails: ${processedEmails.length - validEmails.length}`);
    
    console.log('\nEmails saved to:', config.saveDirectory);
  } catch (error) {
    console.error('Error running email client:', error);
  }
}

//console.log(import.meta.url);
//console.log(`file://${process.argv[1]}`);
if (import.meta.url.endsWith('email-client-es.js')) {
  // This is equivalent to require.main === module
  console.log('Running as a script');
     main()
    .then(() => console.log('Done!'))
    .catch(err => console.error('Error:', err));
}



// Export functions and objects
export {
  processEmails,
  markEmails,
  deleteEmails,
  moveEmails,
  listMailboxes,
  validators,
  config,
  main
};
