function func(input) {
    let iHours = Number(input[0]);
    let iMinutes = Number(input[1]);

    let t = iHours * 60 + iMinutes;
    t += 15;

    iHours = Math.floor(t / 60);
    iMinutes = t % 60;

    if (iHours === 24) {
        iHours = 0;
    }
    if (iMinutes < 10) {
        console.log(`${iHours}:0${iMinutes}`);
    } else {
        console.log(`${iHours}:${iMinutes}`);
    }
}
func(["23", "59"]);