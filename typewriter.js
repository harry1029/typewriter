const sentence = "hello there from lighthouse labs\n";

counter = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
  counter += 50;
}