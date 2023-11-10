console.log("this is javascript tutroial");

function greet(name, greetText = " greetings from javascript ") {
  // yah good morning ko chnage nhi     hogi qk jab tak apna value ask kar rakhe hai yeah ab aska default arrgument kehti hain asko

  // agr ap na kiso ko ex name3 ko greetText pass nhi kiye toh os time wo yeh le lega

  let name1 = "Name1"; // yah name1 pehle wala name1 ko kuch nhi kr skta beause wo goobal verible hai or yah sirf as funcation me hai
  console.log(greetText + " " + name);
  console.log(name + " is a good boy ");
}
// return value funcation

function sum(a, b, c) {
    let d = a + b + c;
    return d;
  }

let name = "hary";
let name1 = "rahi";
let name2 = "sagar";
let name3 = "shabman";

let greetText = "good morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);

let returnVal = sum(1,2,3);
console.log(returnVal);




// funcation ko use karke asa short me kr skte ho

// console.log(name + 'is a good boy');
// console.log(name1 + 'is a good boy');
// console.log(name2 + 'is a good boy');
// console.log(name3 + 'is a good boy');
