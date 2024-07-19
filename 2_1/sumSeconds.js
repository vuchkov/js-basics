function func(input) {
    let t1 = Number(input[0]);
    let t2 = Number(input[1]);
    let t3 = Number(input[2]);
    let sum = t1 + t2 + t3;

    let min = Math.floor(sum / 60);
    let sec = sum % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}
func(["35", "45", "44"]);