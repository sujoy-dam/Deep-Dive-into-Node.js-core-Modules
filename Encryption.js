const crypto = require('crypto');

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text){
     // Create cipher with AES-256-CBC
  const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Encrypt the data
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

    // Return both the encrypted data and the IV
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted
  };
}

// / Function to decrypt data
function decrypt(encryptedData, iv, key) {
  // Create decipher
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    key,
    Buffer.from(iv, 'hex')
  );

  // Decrypt the data
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}