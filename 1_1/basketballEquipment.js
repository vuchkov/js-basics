function calc(input) {
    let fee = Number(input[0]);

    let sneakers = fee - (fee * 40 / 100);
    let clothes = sneakers - (sneakers * 20 / 100);
    let ball = clothes / 4;
    let accessories = ball / 5;

    let total = fee + sneakers + clothes + ball + accessories;

    console.log(total);
}

calc(["365"]);