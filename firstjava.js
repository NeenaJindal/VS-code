const fs = require("fs");
let text = fs.readFileSync("del.txt", "utf-8");
text = text.replace("browser", "ridhi");
console.log("nikunj is good");
console.log(text);
console.log("creating a new file ..........");
fs.writeFileSync("ridhi.txt", text);