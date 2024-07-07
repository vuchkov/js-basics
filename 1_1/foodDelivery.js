function calc(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let chickenPrice = chicken * 10.35;
    let fishPrice = fish * 12.40;
    let veganPrice = vegan * 8.15;

    let subTotal = chickenPrice + fishPrice + veganPrice;
    let desert = 20 / 100 * subTotal;
    let delivery = 2.50;
    let total = subTotal + desert + delivery;

    console.log(total);
}

calc(["2", "4", "3"]);