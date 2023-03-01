function Accumulator(startingValue){
    this.value = this.startingValue

    this.read = function (){
        this.value += +prompt('enter numer...', 0);
    };
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений