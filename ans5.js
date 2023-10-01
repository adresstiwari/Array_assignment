
let array=[2,3,5,7,8,3]
function ret(array){
    return {max:Math.max(...array), min:Math.min(...array)}
}
console.log(ret(array))