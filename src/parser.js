exports.toArray = (input, lineEnding = '\n') =>
    input
        .split(lineEnding)
        .map(row => row.split('|')
            .filter(el => el !== '')
            .map(el => parseInt(el.trim().replace('.', '0'), 10)));

exports.toPSV = (output, lineEnding = '\n') =>
    output
        .map(row => `| ${row.map(el => el === 0 ? '.' : el).join(' | ')} |`)
        .join(lineEnding);
