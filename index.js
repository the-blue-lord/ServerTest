const child_process = require("child_process");
const os = require("os");
const fs = require("fs");

// Get OS information
const platform = os.platform(); // e.g., 'linux', 'win32', 'darwin'
const arch = os.arch(); // e.g., 'x64', 'arm', 'ia32'

console.log(`Operating System: ${platform}`);
console.log(`Architecture: ${arch}`);

fs.chmod("./hello-32bit.out", 0o755, (err) => {
    if(err) {
        console.error("Error seeting execute permissions", err);
        return;
    }

    child_process.execFile("./hello-32bit.out", ["manual"], function(err, data) {
        console.log(err);
        console.log(data.toString());
    });
});