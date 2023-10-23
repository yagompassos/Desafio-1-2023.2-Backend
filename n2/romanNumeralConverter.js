function convertToRoman(num) {
    let romanStr = '';

    while (num>=1000) {
        romanStr += 'M';
        num -= 1000;
    }
    while (num>=900) {
        romanStr += 'CM';
        num -= 900;
    }
    while (num>=500) {
        romanStr += 'D';
        num -= 500;
    }
    while (num>=400) {
        romanStr += 'CD';
        num -= 400;
    }
    while (num>=100) {
        romanStr += 'C';
        num -= 100;
    }
    while (num>=90) {
        romanStr += 'XC';
        num -= 90;
    }
    while (num>=50) {
        romanStr += 'L';
        num -= 50;
    }
    while (num>=40) {
        romanStr += 'XL';
        num -= 40;
    }
    while (num>=10) {
        romanStr += 'X';
        num -= 10;
    }
    while (num>=9) {
        romanStr += 'IX';
        num -= 9;
    }
    while (num>=5) {
        romanStr += 'V';
        num -= 5;
    }
    while (num>=4) {
        romanStr += 'IV';
        num -= 4;
    }
    while (num>=1) {
        romanStr += 'I';
        num -= 1;
    }
return romanStr;
}
  
console.log(convertToRoman(891));
console.log(convertToRoman(3999));
