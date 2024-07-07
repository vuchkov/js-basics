function vacationBookList(input) {
    let pagesBook = Number(input[0]);
    let pagesHour = Number(input[1]);
    let days = Number(input[2]);
    let hoursBook = pagesBook / pagesHour;
    let total = hoursBook / days;
    console.log(total);
}
vacationBookList(["212", "20", "2"]);