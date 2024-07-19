function jsFunc(input) {
    let currentInput = input[0];
    let password = "s3cr3t!P@ssw0rd";

    if(currentInput === password){
        console.log(`Welcome`);
    } else {
        console.log('Wrong password!');
    }
}
jsFunc(['ivo234']);