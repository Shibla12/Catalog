console.log("Starting server...");
console.log("Node version:", process.version);

try {
  const jsonServer = require("json-server");
  console.log("json-server loaded successfully!");
} catch (error) {
  console.error("FAILED TO LOAD JSON SERVER:");
  console.error(error);
  process.exit(1);
}
