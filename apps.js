// Exercise 1 Section

for (let i = 0; i < 100; i++); {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



// Exercise 2 Section

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 i && 5 == 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
      console.log('FIZZ');
    } else if (i % 5 == 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
  
  // exercise 3 section

  do{
    if (i % 3 == 0 && i % 5 == 0){
console.log("FIZZBUZZ");
else if (1 % 3 == 0){
    console.log("FIZZ");
    else if (i % 5 == 0){
        console.log("BUZZ";)
    }
} while (1 < 100);

  }

    // exercise 4

  let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let foundValue = false;
for (let i = 1; i <= n; i++) {
  if (i === value) {
    foundValue = true;
    console.log("Found value!");
    break;
  }
}
if (!foundValue) {
  console.log("Did not find value");
}

// exercise 5

for (let i = start; i <= end i++){
    if (i % 3 = 0 && i % 5 = 0){
        console.log("FIZZBUZZ");
            else if (i % fizzDivisor == 0){
                console.log ("FIZZ");
            }else if (i % BuzzDivisor == 0 ){
        console.log( inc, "BUZZ");
            }
        }
    }

}
console.log (FizzDivisor, Buzzdivisor);