
function swapInArray(num1,num2){
    let arr1=[num1];
    let arr2=[num2];
let arr3=[...arr1,...arr2]
let newArray =[arr3[1],arr3[0]]
console.log (newArray);
}
swapInArray(3,4);