const args = process.argv.slice(2);

for (const timer of args) {
  if (!Number.isInteger(Number(timer)) || Number(timer) < 0) continue;
  setTimeout(() => {
    process.stdout.write('\u0007');
  }, Number(timer) * 1000);
}