function calc(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let cleaner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (10 / 100 * paint)) * 14.50;
    let cleanerPrice = cleaner * 5.00;
    let bagsPrice = 0.40;

    let materials = nylonPrice + paintPrice + cleanerPrice + bagsPrice;
    let masters = 30 / 100 * materials;
    let total = materials + (hours * masters);

    console.log(total);
}

calc(["10", "11", "4", "8"]);