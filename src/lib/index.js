// place files you want to import through the `$lib` alias in this folder.
let total = 1000;

const salary = 250;

for (let i = 0; i <52; i++){
    total = total + salary;
}

console.log(total);


total = 1000;


for (let i = 0; i <52; i++){
  if(i %2 == 0){
    total = total + salary;
  }  
}

console.log(total);