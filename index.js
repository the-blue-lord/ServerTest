import * as child_process from "child_process";
import * as os from "os";

// Get OS information
const platform = os.platform(); // e.g., 'linux', 'win32', 'darwin'
const arch = os.arch(); // e.g., 'x64', 'arm', 'ia32'

console.log(`Operating System: ${platform}`);
console.log(`Architecture: ${arch}`);

child_process.execFile("./hello.exe", ["manual"], function(err, data) {
    console.log(err);
    console.log(data.toString());
});