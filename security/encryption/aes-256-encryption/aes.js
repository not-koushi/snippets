const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // store securely in real apps
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    content: encrypted,
  };
}

function decrypt(hash) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(hash.iv, "hex")
  );

  let decrypted = decipher.update(hash.content, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

module.exports = { encrypt, decrypt };