function calc(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let percent = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;
    let subTotal = pensPrice + markersPrice + cleanerPrice;
    let discount = 25 / 100 * subTotal;
    let total = subTotal - discount;
    console.log(total);
}
calc(["2", "3", "4", "25"]);