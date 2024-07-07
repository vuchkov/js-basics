function calc(input) {
    // let firstName = 'Ilcho';
    // console.log(`${firstName} is the best!`)

    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let subTotal = dogFood * 7.61;
    let discount = 18 / 100 * subTotal;
    let total = subTotal - discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calc(["550"]);