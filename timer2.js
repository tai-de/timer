const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numbers = ['\u0030','\u0031','\u0032','\u0033','\u0034','\u0035','\u0036','\u0037','\u0038','\u0039']

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log(`\nThank you for using me, bye bye!`)
    process.exit();
  }
  // if b is pressed
  if (key === '\u0062') {
    process.stdout.write('\r\u0007');
  }
  // if 1-9 is pressed
  if (key >= '\u0031' && key <= '\u0039') {
    timer = numbers.indexOf(key);
    console.log(`setting timer for ${timer} seconds`)
    setTimeout(() => {
      process.stdout.write('\r\u0007');
    }, Number(timer) * 1000);
  }
});