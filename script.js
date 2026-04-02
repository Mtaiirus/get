// Example: /get/dp-123 → "dp-123"
const fullPath = window.location.pathname;
const parts = fullPath.split("/").filter(p => p.trim() !== "");

// last segment
let code = parts.pop();

// remove index.html or 404.html if present
if (code === "index.html" || code === "404.html") {
    code = "";
}

document.getElementById("output").textContent =
    code ? code : "No code found";
