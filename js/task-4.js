'use strict';

console.log('Задание 5-4!');

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

class StringBuilder {
    constructor(value) {
        this._value = [value];
    }

    // Геттер value - возвращает текущее значение поля _value
    get value() {
        return this._value;
        // return this._value.join('');             // в методы тоже поподает строка
    }

    // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
    append(str) {
        this.value.push(str);
    }

    // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    prepend(str) {
        this.value.unshift(str);
    }

    // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
    pad(str) {
        this.value.push(str);
        this.value.unshift(str);
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value.join('')); // '.^'

builder.prepend('^');
console.log(builder.value.join('')); // '^.^'

builder.pad('=');
console.log(builder.value.join('')); // '=^.^='
