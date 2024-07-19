function jsDemo(input) {
    let currentInput = input[0];
    let name = input[1];
    let password = 'ivo234';

    if(currentInput === password){
        console.log(`Welcome ${name}!`);
    } else {
        console.log('Wrong password!');
    }
}
jsDemo(['ivo234', 'Ivo']);