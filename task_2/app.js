const path = require('path');
const parser = require('./parser');

const filePath = path.join(__dirname, 'data.txt');

const frequency = parser.parseFile(filePath);

for (const [char, count] of Object.entries(frequency)) {
    console.log(`'${char}': ${count} times`);
}
