function duplicateCountOfAChar(input: string) {
  const charMap: { [key: string]: number } = {};
  for (const char of input) {
    if (char !== " ") {
      charMap[char] = (charMap[char] || 0) + 1;
    }
  }
  for(const charz in charMap){
    if(charMap[charz]>1){
      console.log(`Char '${charz}' have duplicates of ${charMap[charz]}`);
    }
  }
}

duplicateCountOfAChar("Essential");