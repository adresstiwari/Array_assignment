let check_duplicate = (array) => {
    let unique = new Set();
    for (let i = 0; i < array.length; i++) {
        if (unique.has(array[i])) {
        }
        unique.add(array[i]);
    }
    return(Array.from(unique))
    
};
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate(arr));