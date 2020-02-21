function sorting(arrNumber) {
    // code di sini
    for (var i = 0; i < arrNumber.length; i++) {
        let swap = false
        for (var j = 0; j < arrNumber.length - 1; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                var temp = arrNumber[j + 1]
                arrNumber[j + 1] = arrNumber[j]
                arrNumber[j] = temp
                swap = true
            }
        }
        if (swap === false) {
            break;
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini

    if (arrNumber == '') {
        return arrNumber
    }

    else {
        let partArray = {}
        for (var k = 0; k < arrNumber.length; k++) {
            if (partArray[arrNumber[k]] == null) {
                partArray[arrNumber[k]] = 1
            }

            else {
                partArray[arrNumber[k]]++
            }
        }

        var tmp = undefined
        var result = undefined

        for (const key in partArray) {
            if (tmp == undefined) {
                tmp = partArray[key]
                result = key
            }

            else if (tmp < partArray[key]) {
                tmp = partArray[key]
                result = key
            }
        }
        return 'angka paling besar adalah' + ' ' + result + ' ' + 'dan jumlah kemunculan sebanyak' + ' ' + tmp + ' ' + 'kali'
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''