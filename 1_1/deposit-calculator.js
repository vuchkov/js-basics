function convert(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let interest = Number(input[2]);
    let totalInterest = deposit * interest / 100;
    let month = totalInterest / 12;
    let total = deposit + period * month;
    console.log(total);
}
convert(["200", "3", "5.7"]);