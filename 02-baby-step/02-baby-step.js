let results = 0;

for (let i = 2; i < process.argv.length; i++) {
    results += Number(process.argv[i]);
}

console.log(results);
