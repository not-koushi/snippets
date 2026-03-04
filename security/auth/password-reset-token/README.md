# Password Reset Token Generator

## What it does

Generates a secure random token for password reset workflows.

## Usage

```js
const generateResetToken = require("./generateResetToken");

const { token, expiresAt } = generateResetToken();
```

## Example Flow

1. Generate token
2. Store token and expiration in database
3. Send reset link to user

Example link:

```
https://yourapp.com/reset-password?token=<token>
```

## Notes

- Token expires after 15 minutes.
- Use HTTPS when sending reset links.
- Always hash tokens in database for additional security.