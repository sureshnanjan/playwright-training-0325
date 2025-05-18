import crypto from 'crypto';
import tls from 'tls';
console.log('OpenSSL version:', process.versions.openssl);
console.log('Default CA file:', tls.rootCertificates[0].substr(0, 150) + '...');
console.log('Number of default CAs:', tls.rootCertificates.length);
tls.rootCertificates.forEach((cert, index) => {
  console.log(`Certificate ${index + 1}:`, cert.substr(0, 150) + '...');
});