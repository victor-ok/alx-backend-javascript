process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const chuck = process.stdin.read();
    if (chuck !== null) {
        process.stdout.write(`Your name is: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
