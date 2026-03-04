const crypto = require("crypto");

function generateResetToken() {
    const token = crypto.randomBytes(32).toString("hex");

    const expiresAt = Date.now() + 1000 * 60 * 15; // 15 mins

    return {
        token,
        expiresAt,
    };
}

module.exports = generateResetToken;