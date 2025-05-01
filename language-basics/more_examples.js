// Example 1: Basic Data Fetching
// -----------------------------

// Callback Version
function fetchUserDataCallback(userId, callback) {
    setTimeout(() => {
      if (userId <= 0) {
        callback(new Error('Invalid user ID'));
      } else {
        callback(null, {
          id: userId,
          name: 'User ' + userId,
          email: `user${userId}@example.com`
        });
      }
    }, 1000);
  }
  
  // Usage with callback
  fetchUserDataCallback(123, (error, data) => {
    if (error) {
      console.error('Error fetching user:', error.message);
    } else {
      console.log('User data:', data);
    }
  });
  
  // Promise Version
  function fetchUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId <= 0) {
          reject(new Error('Invalid user ID'));
        } else {
          resolve({
            id: userId,
            name: 'User ' + userId,
            email: `user${userId}@example.com`
          });
        }
      }, 1000);
    });
  }
  
  // Usage with promise
  fetchUserDataPromise(123)
    .then(data => console.log('User data:', data))
    .catch(error => console.error('Error fetching user:', error.message));
  
  // Example 2: File Operations
  // -------------------------
  
  // Callback Version
  function readFileCallback(filename, callback) {
    setTimeout(() => {
      if (!filename.endsWith('.txt')) {
        callback(new Error('Only .txt files are supported'));
        return;
      }
      
      const content = `This is the content of ${filename}`;
      callback(null, content);
    }, 800);
  }
  
  // Usage with nested callbacks (callback hell example)
  readFileCallback('data.txt', (error, content) => {
    if (error) {
      console.error('Error reading file:', error.message);
      return;
    }
    
    console.log('File content:', content);
    
    // Process content and write to another file
    processAndWriteCallback(content, 'output.txt', (error, success) => {
      if (error) {
        console.error('Error writing file:', error.message);
        return;
      }
      
      console.log('File written successfully:', success);
      
      // Another operation that depends on the previous one
      notifyUserCallback('File processing complete', (error, notified) => {
        if (error) {
          console.error('Notification failed:', error.message);
        } else {
          console.log('User notified:', notified);
        }
      });
    });
  });
  
  function processAndWriteCallback(content, filename, callback) {
    setTimeout(() => {
      const processed = content.toUpperCase();
      callback(null, `Wrote ${processed.length} characters to ${filename}`);
    }, 600);
  }
  
  function notifyUserCallback(message, callback) {
    setTimeout(() => {
      callback(null, `Notification sent: ${message}`);
    }, 400);
  }
  
  // Promise Version
  function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!filename.endsWith('.txt')) {
          reject(new Error('Only .txt files are supported'));
          return;
        }
        
        const content = `This is the content of ${filename}`;
        resolve(content);
      }, 800);
    });
  }
  
  function processAndWritePromise(content, filename) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processed = content.toUpperCase();
        resolve(`Wrote ${processed.length} characters to ${filename}`);
      }, 600);
    });
  }
  
  function notifyUserPromise(message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Notification sent: ${message}`);
      }, 400);
    });
  }
  
  // Usage with promise chaining
  readFilePromise('data.txt')
    .then(content => {
      console.log('File content:', content);
      return processAndWritePromise(content, 'output.txt');
    })
    .then(success => {
      console.log('File written successfully:', success);
      return notifyUserPromise('File processing complete');
    })
    .then(notified => {
      console.log('User notified:', notified);
    })
    .catch(error => {
      console.error('Error in file processing chain:', error.message);
    });
  
  // Example 3: API Requests
  // ----------------------
  
  // Callback Version
  function getApiDataCallback(endpoint, callback) {
    setTimeout(() => {
      if (!endpoint.startsWith('/api/')) {
        callback(new Error('Invalid API endpoint'));
        return;
      }
      
      const data = { result: `Data from ${endpoint}`, timestamp: Date.now() };
      callback(null, data);
    }, 1200);
  }
  
  // Usage with callbacks
  getApiDataCallback('/api/users', (error, userData) => {
    if (error) {
      console.error('API error:', error.message);
      return;
    }
    
    console.log('User data:', userData);
    
    // Get related posts after getting user data
    getApiDataCallback('/api/posts', (error, postData) => {
      if (error) {
        console.error('API error:', error.message);
        return;
      }
      
      console.log('Post data:', postData);
      
      // Combine results
      const combined = {
        users: userData,
        posts: postData
      };
      console.log('Combined data:', combined);
    });
  });
  
  // Promise Version
  function getApiDataPromise(endpoint) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!endpoint.startsWith('/api/')) {
          reject(new Error('Invalid API endpoint'));
          return;
        }
        
        const data = { result: `Data from ${endpoint}`, timestamp: Date.now() };
        resolve(data);
      }, 1200);
    });
  }
  
  // Usage with Promise.all for parallel requests
  Promise.all([
    getApiDataPromise('/api/users'),
    getApiDataPromise('/api/posts')
  ])
    .then(([userData, postData]) => {
      console.log('User data:', userData);
      console.log('Post data:', postData);
      
      const combined = {
        users: userData,
        posts: postData
      };
      console.log('Combined data:', combined);
    })
    .catch(error => {
      console.error('API error:', error.message);
    });
  
  // Example 4: Database Operations
  // ----------------------------
  
  // Callback Version
  function connectDatabaseCallback(config, callback) {
    setTimeout(() => {
      const connection = { id: Math.floor(Math.random() * 1000), status: 'connected' };
      callback(null, connection);
    }, 500);
  }
  
  function queryDatabaseCallback(connection, query, callback) {
    setTimeout(() => {
      if (!connection || !connection.status) {
        callback(new Error('Invalid connection'));
        return;
      }
      
      if (!query) {
        callback(new Error('Query is required'));
        return;
      }
      
      const results = { rows: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]};
      
      callback(null, results);
    }, 700);
  }
  
  function closeDatabaseCallback(connection, callback) {
    setTimeout(() => {
      if (!connection || !connection.status) {
        callback(new Error('Invalid connection'));
        return;
      }
      
      callback(null, { success: true, message: 'Connection closed' });
    }, 300);
  }
  
  // Usage with nested callbacks
  connectDatabaseCallback({ host: 'localhost' }, (error, connection) => {
    if (error) {
      console.error('Connection error:', error.message);
      return;
    }
    
    console.log('Connected to database:', connection);
    
    queryDatabaseCallback(connection, 'SELECT * FROM items', (error, results) => {
      if (error) {
        console.error('Query error:', error.message);
        
        // Always close connection, even on error
        closeDatabaseCallback(connection, (closeError) => {
          if (closeError) {
            console.error('Error closing connection:', closeError.message);
          }
        });
        return;
      }
      
      console.log('Query results:', results);
      
      // Close connection after query
      closeDatabaseCallback(connection, (closeError, result) => {
        if (closeError) {
          console.error('Error closing connection:', closeError.message);
          return;
        }
        
        console.log('Database connection closed:', result);
      });
    });
  });
  
  // Promise Version
  function connectDatabasePromise(config) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const connection = { id: Math.floor(Math.random() * 1000), status: 'connected' };
        resolve(connection);
      }, 500);
    });
  }
  
  function queryDatabasePromise(connection, query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!connection || !connection.status) {
          reject(new Error('Invalid connection'));
          return;
        }
        
        if (!query) {
          reject(new Error('Query is required'));
          return;
        }
        
        const results = { rows: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ]};
        
        resolve(results);
      }, 700);
    });
  }
  
  function closeDatabasePromise(connection) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!connection || !connection.status) {
          reject(new Error('Invalid connection'));
          return;
        }
        
        resolve({ success: true, message: 'Connection closed' });
      }, 300);
    });
  }
  
  // Usage with promises and finally for cleanup
  let dbConnection = null;
  
  connectDatabasePromise({ host: 'localhost' })
    .then(connection => {
      console.log('Connected to database:', connection);
      dbConnection = connection;
      return queryDatabasePromise(connection, 'SELECT * FROM items');
    })
    .then(results => {
      console.log('Query results:', results);
    })
    .catch(error => {
      console.error('Database operation error:', error.message);
    })
    .finally(() => {
      // Close connection whether operation succeeded or failed
      if (dbConnection) {
        closeDatabasePromise(dbConnection)
          .then(result => console.log('Database connection closed:', result))
          .catch(error => console.error('Error closing connection:', error.message));
      }
    });
  
  // Example 5: Event-based operations with async/await
  // ------------------------------------------------
  
  // Callback Version
  function waitForEventCallback(eventName, timeout, callback) {
    let timeoutId = null;
    
    function eventHandler(data) {
      clearTimeout(timeoutId);
      callback(null, data);
    }
    
    // Simulate event listener
    timeoutId = setTimeout(() => {
      callback(new Error(`Timeout waiting for ${eventName}`));
    }, timeout);
    
    // Simulate event occurring
    setTimeout(() => {
      const eventData = { name: eventName, data: { value: Math.random() } };
      eventHandler(eventData);
    }, Math.floor(Math.random() * timeout * 0.8)); // Event occurs before timeout most of the time
  }
  
  // Usage with callback
  waitForEventCallback('click', 2000, (error, eventData) => {
    if (error) {
      console.error('Event error:', error.message);
      return;
    }
    
    console.log('Event received:', eventData);
  });
  
  // Promise Version
  function waitForEventPromise(eventName, timeout) {
    return new Promise((resolve, reject) => {
      let timeoutId = null;
      
      function eventHandler(data) {
        clearTimeout(timeoutId);
        resolve(data);
      }
      
      // Simulate event listener
      timeoutId = setTimeout(() => {
        reject(new Error(`Timeout waiting for ${eventName}`));
      }, timeout);
      
      // Simulate event occurring
      setTimeout(() => {
        const eventData = { name: eventName, data: { value: Math.random() } };
        eventHandler(eventData);
      }, Math.floor(Math.random() * timeout * 0.8)); // Event occurs before timeout most of the time
    });
  }
  
  // Usage with async/await
  async function handleEvents() {
    try {
      console.log('Waiting for click event...');
      const clickEvent = await waitForEventPromise('click', 2000);
      console.log('Click event received:', clickEvent);
      
      console.log('Waiting for submit event...');
      const submitEvent = await waitForEventPromise('submit', 2000);
      console.log('Submit event received:', submitEvent);
      
      return { click: clickEvent, submit: submitEvent };
    } catch (error) {
      console.error('Event handling error:', error.message);
      throw error; // Re-throw for caller handling
    }
  }
  
  // Execute the async function
  handleEvents()
    .then(results => console.log('All events processed:', results))
    .catch(error => console.error('Failed to handle events:', error.message));