const fs = require('fs');

function parseFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const period = {};

    lines.forEach(line => {
        for (const char of line) {
            if (char.trim()) {
                if (period[char]) {
                    period[char]++;
                } else {
                    period[char] = 1;
                }
            }
        }
    });

    return period;
}

module.exports = {
    parseFile
};
