const crypto = require('crypto');

const customHash = (message, userId, secretKey, timestamp) => {
    const sha256Hash = crypto.createHash('sha256')
        .update(message + userId + timestamp + secretKey)
        .digest('hex');

    // Add a custom XOR-based hashing step for additional complexity
    const xorKey = 123; // Example XOR key
    let customHash = '';
    for (let i = 0; i < sha256Hash.length; i++) {
        customHash += String.fromCharCode(sha256Hash.charCodeAt(i) ^ xorKey);
    }

    return customHash;
}

// Example usage:
const message = "Hello, this is a secure message!";
const userId = "12345";
const secretKey = "mySecretKey123";
const timestamp = Date.now();

const integrityHash = customHash(message, userId, secretKey, timestamp);
console.log("Generated Hash:", integrityHash);
