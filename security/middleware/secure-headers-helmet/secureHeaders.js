const helmet = require("helmet");

const secureHeaders = helmet({
  contentSecurityPolicy: false, // configure CSP manually in production
  crossOriginEmbedderPolicy: false
});

module.exports = secureHeaders;