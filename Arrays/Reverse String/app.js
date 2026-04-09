// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

let s = ["h","e","l","l","o"];
let reverseString = function(s){
    let len = s.length;
    let halflen = Math.floor(len / 2)

    for(let i =0; i< halflen; i++){
        // swapping s[i], s[len-1-i]
        let temp = s[i];
        s[i] = s[len -1 - i];
        s[len-1-i] = temp;
    }
}

reverseString(s)

console.log(s);