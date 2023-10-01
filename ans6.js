const person ={
    name: "Adarsh",
    age: 23,
    address:{
        street: "Lalbagh Fizabad ",
        city: "Ayodhya",
        state: "Uttar Pradesh"
    },
};
function extract(obj){
      return  {name:obj.name,street:obj.address.street};
}
console.log(extract(person));