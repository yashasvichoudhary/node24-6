const fs = require('fs');

console.log("new file");

const text = `This is an auto-generated file using Node.js
console.log("Hello from second.js");
`;

fs.writeFileSync("second.js", text);
console.log("File written");

const content = fs.readFileSync('about.js', 'utf-8');
console.log(content);


fs.appendFileSync("second.js", '\nconsole.log("Data appended to the file.");');
console.log(" Appended extra content to second.js");

const thirdcontent = fs.readFileSync('second.js','utf-8');
console.log(thirdcontent);

fs.writeFileSync("third.js", "console.log('new file ');");
console.log("New file written: third.js");