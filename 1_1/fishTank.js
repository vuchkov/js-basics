function calc(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let percent = Number(input[3]);

    let v = a * b * c / 1000;
    let other = 17 / 100;

    let total = v * (1 - other);

    console.log(total);
}

calc(["85", "75", "47", "17"]);