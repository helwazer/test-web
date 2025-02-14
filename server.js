const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Basic API endpoint
app.get("/", (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

// Start server
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
