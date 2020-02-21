function changeVocals(str) {
    //code di sini
    var result = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            result += 'b'
        }

        else if (str[i] == 'i') {
            result += 'j'
        }

        else if (str[i] == 'u') {
            result += 'v'
        }

        else if (str[i] == 'e') {
            result += 'f'
        }

        else if (str[i] == 'o') {
            result += 'p'
        }

        else if (str[i] == 'A') {
            result += 'B'
        }

        else if (str[i] == 'I') {
            result += 'J'
        }

        else if (str[i] == 'U') {
            result += 'V'
        }

        else if (str[i] == 'E') {
            result += 'F'
        }

        else if (str[i] == 'O') {
            result += 'P'
        }

        else {
            result += str[i]
        }

    }
    return result
}


function reverseWord(str) {
    //code di sini
    var reverse = ''
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}

function setLowerUpperCase(str) {
    //code di sini
    var set = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == str[i]) {
            set += str[i].toUpperCase()
        }

        else {
            set += str[i].toLowerCase()
        }
    }

    return set
}


function removeSpaces(str) {
    //code di sini
    var count = 0
    var set = ''
    for (var i = 0; i < str.length; i++) {
        count++
        if (str[i] !== ' ') {
            set += str[i]
        }
    }

    if (count < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    return set
}

function passwordGenerator(name) {
    //code di sini
    var changeVoc = changeVocals(name)
    var reverse = reverseWord(changeVoc)
    var setLowUp = setLowerUpperCase(reverse)
    var removeSpace = removeSpaces(setLowUp)
    return removeSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'