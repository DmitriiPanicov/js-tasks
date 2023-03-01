function copySorted(ar) {
    return ar.slice().sort();
}

let ar = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(ar);

alert(sorted);
alert(ar);