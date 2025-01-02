import { readFileSync } from 'node:fs';
import plist from 'plist';

if (process.argv.length != 3) {
    console.log(`usage: ${process.argv[0].replace(/^.*\//, '')} ` +
        `${process.argv[1].replace(/^.*\//, '')} colorScheme.itermcolors`)
    process.exit(1)
}

const colorSource = readFileSync(process.argv[2], 'utf8');
const colors = plist.parse(colorSource);

for (let n = 0; n <= 15; n++) {
    let source = colors[`Ansi ${n} Color`];
    let r = Math.trunc(source['Red Component'] * 255).toString(16);
    let g = Math.trunc(source['Green Component'] * 255).toString(16);
    let b = Math.trunc(source['Blue Component'] * 255).toString(16);
    
    console.log(`palette = ${n}=#${r}${g}${b}`)
}
