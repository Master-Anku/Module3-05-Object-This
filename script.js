// TODO: What is `this` referring to here?
// Ans: browser(window)
console.log(this);
  
// TODO: What is `this` referring to here?
//Ans: browser(window)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
//console.log('helloThis')

// TODO: What is `this` referring to here? What will be logged in the console?
// Ans: refer child object
// Ans: 20
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
// Ans:fefer investment object
// Ans:5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console
console.log(helloThis);
