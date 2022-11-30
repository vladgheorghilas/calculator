const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const operate = (operator,num1,num2) => operator(num1,num2);

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const mscButtons = document.querySelectorAll('.msc');

numberButtons.forEach( button=> {
  button.addEventListener('click', readNumber);
});

operatorButtons.forEach( button => {
  button.addEventListener('click', readOperator);
});

mscButtons.forEach( button =>{
  button.addEventListener('click', readMsc);
});

const display=document.querySelector('span');
let prevNum=0;
let operator='+';
let currentNum='';

function decimals(a){
  a=(Math.round(a*1000))/1000;
  return a;
  }

function readNumber(e){
  currentNum+=e.target.textContent;
  display.textContent=currentNum;
}

function readMsc(e){
  if(e.target.textContent==='AC')
  {
    prevNum=0;
    operator='+';
    currentNum='';
    display.textContent='0';
  }
  if(e.target.textContent==='Backsp')
  {
    currentNum=currentNum.slice(0,currentNum.length-1);
    display.textContent=currentNum;
  }
  if(e.target.textContent==='.')
  {
    if(!currentNum.includes('.'))
      currentNum+='.';
      display.textContent=currentNum;
  }
}

function readOperator(e){
  if(currentNum==='0' && operator==='/')
    {
      display.textContent='not cool bro';
    }
  else
  {
    if(e.target.textContent==="="){
      switch(operator){
        case '+':{
          prevNum=operate(add,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          break;
        }
        case '-':{
          prevNum=operate(subtract,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          break;
        }
        case '*':{
          prevNum=operate(multiply,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          break;
        }
        case '/':{
          prevNum=operate(divide,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          
        }
      }
      currentNum='';
      operator='+';
    }
    else
    {
      switch(operator){
        case '+':{
          prevNum=operate(add,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          currentNum='';
          operator=e.target.textContent;
          break;
        }
        case '-':{
          prevNum=operate(subtract,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          currentNum='';
          operator=e.target.textContent;
          break;
        }
        case '*':{
          prevNum=operate(multiply,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          currentNum='';
          operator=e.target.textContent;
          break;
        }
        case '/':{
          prevNum=operate(divide,prevNum,+currentNum);
          prevNum=decimals(prevNum);
          display.textContent=prevNum;
          currentNum='';
          operator=e.target.textContent;
          break;
        }
      }
    }
  }
  
  
}














/* let number='';
let display = document.querySelector('span');
let number2=0;

function readNumber(e){
  number+=e.target.textContent;
  display.textContent+=e.target.textContent;
  return number;
}

operatorButtons.forEach( button => {
  button.addEventListener('click', calculate)
});

function calculate(e){
  if(number.includes('+') || number.includes('-') ||
      number.includes('*') || number.includes('/'))
      {
        let i;
        let opIndex;
        for(i=0;i<number.length;i++)
          if(!(number[i]>=0 && number[i]<=9))
          {
            opIndex=number[i];
            break;
          }
            
        console.log(i);
        console.log(number);
        console.log(opIndex);
        number+=readNumber(e);
        switch(opIndex){
          case '+':
          {
            let opIndex=number.indexOf('+');
            console.log(operate(add,+number.slice(0,i),+number.slice(i+1)));
            number2+=operate(add,+number.slice(0,i),+number.slice(i+1));
            number='';
            display.textContent=number2;
          }
        }
      }
  else{
    display.textContent;
    number+=e.target.textContent;
  }
       
} */




/* let output=[0];
let i=0
let display = document.querySelector('span');
let currentNum=0;
let newNum=0;
let operator='';
let result=0;

function populateScreen(e){
  let input = e.target.textContent;
  output[i] = output[i]*10 + +input;
  console.log(i);
  console.log(output[i]);
  display.textContent=output[i];
  
}

operatorButtons.forEach(button => {
  button.addEventListener('click', operation);
});

function operation(e){
  operator = e.target.textContent;
  switch(operator){
    case '+':
      {
        result=result+add(output[i],output[i-1]);
        console.log(result);
        break;
      }
     case '-':
      {
        result=result+subtract(output[i],output[i-1]);
        console.log(result);
        break;
      }
     case '*':
      {
        result=result+multiply(output[i],output[i-1]);
        console.log(result);
        break;
      }
     case '/':
      {
        result=result+divide(output[i],output[i-1]); 
        console.log(result);
      }
  
  console.log(operator);
  
  
        
  }
  i++;
  output[i]=0;
} */
 
/* newNum=subtract(output,currentNum);
      output=0;
      console.log(newNum);
      display.textContent=newNum;
      currentNum=newNum; */

/* const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', calculator));

let output=0;
let operator;
let display = document.querySelector('span');

let createNum = (digit) => { 
  digit= +digit;
  output = digit + output*10;
  display.textContent=output;}

function calculator(e){
    let input = e.target.textContent; //6
    if(input<10 && input>=0)
    {
        createNum(input);
    }
    if(input === '+' || input === '-' || input === '*' || input === '/')
    {
       currentNum=output;
       console.log(currentNum);
       console.log(typeof(operator));
       operator = input;
       console.log(operator);
       output=0;
    
    }
    if(input === 'Backsp')
    {
        output = Math.floor(output/10);
        display.textContent=output;
    }
    if(input === 'AC')
    {
        output=0;
        display.textContent=output;
    }
    if(input === '=')
    {
        switch(operator){
          case '+':
            output=operate(add,currentNum,output);
            display.textContent=output;
            break;
          case '-':
            output=operate(subtract,currentNum,output);
            display.textContent=output;
            break;
          case '*':
            output=operate(multiply,currentNum,output);
            display.textContent=output;
            break;
          case '/':
            output=operate(divide,currentNum,output);
            display.textContent=output;
        }
    }
  }; */


/* 2 => 2
3 => 2 + 3*10
5 => 32 + 5*100; */

/* 532 => 53 */