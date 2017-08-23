exports.toArray = input =>
    input
        .split('\r\n')
        .map(row => row.split('|')
            .filter(el => el !== '')
            .map(el => parseInt(el.trim().replace('.', '0'), 10)));

exports.toPSV = output =>
    output
        .map(row => `| ${row.map(el => el === 0 ? '.' : el).join(' | ')} |`)
        .join('\r\n');
