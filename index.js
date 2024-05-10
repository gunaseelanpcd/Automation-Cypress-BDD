function duplicateCountOfAChar(input) {
    var charMap = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char !== " ") {
            charMap[char] = (charMap[char] || 0) + 1;
        }
    }
    for (var charz in charMap) {
        if (charMap[charz] > 1) {
            console.log("Char '".concat(charz, "' have duplicates of ").concat(charMap[charz]));
        }
    }
}
duplicateCountOfAChar("Essential");
