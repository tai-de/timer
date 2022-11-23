const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log(`\nThank you for using me, bye bye!`);
    process.exit();
  }
  // if b is pressed
  if (key === 'b') {
    process.stdout.write('\r\u0007');
  }
  // if 1-9 is pressed
  if (key >= '1' && key <= '9') {
    console.log(`setting timer for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write('\r\u0007');
    }, Number(key) * 1000);
  }
});