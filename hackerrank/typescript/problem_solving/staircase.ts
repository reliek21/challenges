function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    let spaces: number = n - i;

    for (let j = 0; j < spaces; j++) {
      process.stdout.write(' ');
    }

    for (let k = 0; k < i; k++) {
      process.stdout.write('#');
    }

    console.log();
  }
}

console.log(staircase(6));