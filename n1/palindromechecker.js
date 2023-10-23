function isPalindrome(str) {
    let cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const n = cleanStr.length-1;

    for (let i=0; i<n/2; i++){
        if (cleanStr[i] != cleanStr[n-i]) return false;
    }

    return true;
}

console.log(isPalindrome('subi no onibus'));