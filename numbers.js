// Complete the Numbers class below
// the constructor has already been provided
class Numbers{
  constructor(data){
    //data can either be a string or an array of numbers
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    return this.data.length;
    }

    //return the count of numbers in data
  
  printNumbers(){
    //print the numbers in data
    const output = [];
    for(let i = 0; i < this.data.length; i++) {
        const number = this.data[i];
        output.push(`The number ${number} is at index ${i} in the array.`);
    }
    return output.join('\n');
    
  }
  odds(){
    //return the odd numbers in data
    const oddNums =[];
    for(let i = 0; i < this.data.length; i++){
        const odd = this.data[i];
        if (odd % 2 !== 0){
            oddNums.push(odd);
        }
    }
    return oddNums;
  }
  evens(){
    //return the even numbers in data
    const evenNums =[];
    for(let i = 0; i < this.data.length; i++){
        const even = this.data[i];
        if (even % 2 == 0){
            evenNums.push(even);
        }
    }
    return evenNums;
  }
  
  sum(){
    //return the sum of the numbers
    let sum = 0;
    for(let i = 0; i < this.data.length; i++){
        const newNumber = this.data[i];
        sum = sum + newNumber;
    }
    return `The sum of the array is ${sum}`;
  }
  product(){
    //return the product of the numbers
    let multiply = 1;
    for( let i = 0; i < this.data.length; i++){
        const newNumber = this.data[i];
        multiply = multiply * newNumber;
    }
    return `The sum of the array is ${multiply}`;
  }
  
  greaterThan(target){
    //return the numbers greater than the target
    const greaterNumbers = this.data.filter(number => number > target)
    return greaterNumbers;
  }
  howMany(target){
    //return the count of a given number
    const count = this.data.reduce((acc, number) => (number === target ? acc + 1 : acc), 0);
  
  return count;
  }
}

const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
console.log(n1.printNumbers());//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number
