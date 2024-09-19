const repeatString = function (string, num) {
    const strOld = string
    if (num < 0) return 'ERROR'
    else if (num === 0) return ''
    else if (num === 1) return string
    else {
        for (let i = 0; i < num - 1; i++) {
            string += strOld
        }
        return string
    }
}

// Do not edit below this line
module.exports = repeatString
