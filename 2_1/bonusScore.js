function func(input) {
    let n = Number(input[0]);
    let bonus = 0.0;

    if (n <= 100) {
        bonus = 5;
    } else if (n > 1000) {
        bonus = 10 / 100 * n;
    } else {
        bonus = 20 / 100 * n;
    }

    if (n % 2 === 0) {
        bonus += 1;
    }
    if (n % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(n + bonus);
}
func(["20"]);