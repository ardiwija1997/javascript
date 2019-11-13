// mengenal nilai yang dianggap salah dan diangap benar
// truthy and falsy

console.log(false==0); // dianggap salah
console.log(false ==''); // dianggap salah
console.log(1==true); //dianggap benar

// shorthand javascript
let value = '';  // string kosong dianggap salah 

// (value !== '') lebih baik 
if(value == true){  // cara membaca value ada isinya atau tidak
    console.log('there is something inside the value ');
}else{
    console.log('there is nothing inside the value');
}