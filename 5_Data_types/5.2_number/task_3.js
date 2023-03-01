function readNumber() {
    let num;

    do {
        num = prompt("enter number", 0);
    } while (!isFinite(num));

    if (num === null || num === '') {
        return null
    }
    return +num;
}

alert(readNumber());