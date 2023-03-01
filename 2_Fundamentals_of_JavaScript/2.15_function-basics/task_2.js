// 1 version

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// 2 version

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}