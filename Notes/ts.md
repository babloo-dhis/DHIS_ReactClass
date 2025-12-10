What is TypeScript?

TypeScript is a programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. TypeScript adds features such as static typing, interfaces, and classes to JavaScript, making it a more robust and maintainable language.

Why use TypeScript?

TypeScript provides several benefits over JavaScript, including:

Static typing: TypeScript allows you to define the types of variables, functions, and objects, which can help catch errors early in the development process.

Interfaces: TypeScript provides a way to define the shape of objects, which can help ensure that objects have the correct properties and methods.

Classes: TypeScript provides a way to define classes, which can help organize code and make it more reusable.

TypeScript is a popular choice for building large-scale applications, as it provides better tooling and debugging capabilities than JavaScript.

- Reduce errors: TypeScript can catch errors early in the development process, which can save time and reduce the cost of debugging.

- Better tooling: TypeScript provides better tooling and debugging capabilities than JavaScript, which can make it easier to develop and maintain applications.

- Better code organization: TypeScript provides a way to define classes and interfaces, which can help organize code and make it more reusable.


- Syntax
  - Variables
  - Functions
  - Classes
  - Interfaces
  - Enums
  - Generics
  - Modules
  - Namespaces
  - Decorators
    - 

let username:string="Shubam";
let age:number=25;
let isStudent:boolean=true;
let names:string[]=["Shubam","Babloo","Ravi"];

- Installing & Running TypeScript

1. Install Node.js
2. Install TypeScript   

npm/yarn/pnpm install -g typescript

3. Run TypeScript

npx tsc --init

4. Run TypeScript

tsc file_name.ts


Type of Annotations

- string
- number
- boolean
- array
- object
- tuple
- enum
- any
- void
- never
- null
- undefined

let price:number=100;
let product:string="Laptop";
let isAvailable:boolean=true;
let names:string[]=["Shubam","Babloo","Ravi"];
let marks:number[]=[10,20,30,40,50];

-Array
let prices:number[]=[10,20,30,40,50];

-Object
let person:{
    name:string;
    age:number;
    isStudent:boolean;
}={
    name:"Shubam",
    age:25,
    isStudent:true
}

- Tuple
let person:[string,number,boolean]=['Shubham',25,true];

- Enum
enum Color{
    Red,
    Green,
    Blue
}

- Any
let person:any={
    name:"Shubam",
    age:25,
    isStudent:true
}

- Void
function printName(name:string):void{
    console.log(name);
}

- Never
function throwError(message:string):never{
    throw new Error(message);
}

- Null
let person:null=null;

- Undefined
let person:undefined=undefined;


Function in TypeScript

- Function without return type
function add(a:number, b:number):number{
    return a+b;
}

- Function with return type
function add(a:number, b:number):number{
    return a+b;
}   

add(10,20);

- Default Parameters
  function multiply(a:number, b:number=10):number{
      return a*b;
  }

  multiply(10);


- Object Parameters

function printUser(user:{name:string,age:number,isStudent:boolean}):void{
    console.log(user);
}

printUser({name:"Shubam",age:25,isStudent:true});
