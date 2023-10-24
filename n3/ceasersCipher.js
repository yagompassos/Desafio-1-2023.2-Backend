function rot13(str) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr = '';

    for (let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            if (alfabeto.indexOf(str[i]) >= 13){
                newStr += alfabeto[alfabeto.indexOf(str[i])-13];
            } else {
                newStr += alfabeto[alfabeto.indexOf(str[i])+13];
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
  
console.log(rot13("SERR PBQR PNZC"));