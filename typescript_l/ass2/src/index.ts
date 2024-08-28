/**ass1***/
// type n = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

/****ass2 */
// type mix= number | boolean;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

/******ass3 */
// // Write Your Code Here
// type Info ={
//     theName:string,
//     theAge:number
// };
// type Full = Info & {
//     country:string,
// };
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//   }
//   console.log(showInfo({ theName: "Elzero", theAge: 40 }));
  
//   function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
//   }
//   console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

/****ass4 */
// function yesOrNo(val: number |string ) : boolean|"Erorr"{
//     if (typeof val === "string") {
//         return "Erorr";
//     }
//     return val > 10;

//   }
  
//   // Do Not Edit Here
//   console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False

/***ass5 */
// function isHeOld(age: number | string) : "Erorr" | "yes" |"no"{
//   if (typeof age === "string") {
//             return "Erorr";
//         }

//     return age > 40 ? "yes" :"no";
//   }
  
//   // Do Not Edit Here
//   console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"

  /*****ass6 */
// let post:[any,any,any] = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here
// const [id,title,state]=post;
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

/***ass7 */
// // Create Enums + Function Here
// let Game={
//   Easy:100,
//   Medium:80,
//   Hard:30,
//   Insane:20
// }
// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

/***ass8 */
// const user: {
//   username: string,
//   age: any,
//   website?: string,
//   skills: {
//     frontEnd: string[],
//     backEnd: any[]
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);





/*******************************************ass3********************************************* */
/***task1*/
// // Edit The Interface To Fix The Problems
// interface Member {
//   id: string|number;
//   username: string;
//   //  country: string;
//    state: boolean;
//   getName():string;
// }

// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() { // 'getName' does not exist in type 'Member'
//     return this.username;
//   }
// }

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property
/**task2 */
// // Create Interface Here
// interface Client{
//   id:number;
//   username:string;
//   active:boolean;
//   discount:number;
//   getPrice(p:number):number;
// }
// // Do Not Edit The Code Below
// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   }
// }

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

/***task 3 */
// // Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }
// interface Superman extends Man ,Bird{
//   bodyType:string;
//   origin:string;
// }
// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton"
// }
/***task 4 */
// // Create Class Here
// class Player{
//   name:string;
//   last:string;
//   age:number|string;
//   old?:boolean;
//   details: () => string;
//   constructor(name:string,last:string,age:number|string,old?:boolean){
//     this.name = name;
//     this.last=last;
//     this.age = age;
//     this.old=old;
// // this.name=name;
// this.details=function () {
//   if(this.old===true){
// return `VIP ${this.name}, Type Is ${this.last},Level Is ${this.age}`;
//   }
//   else{
//     return `${this.name}, Type Is ${this.last},Level Is ${this.age}`;

//   }
// }
//   }

// }
// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

/***task 5 */
// class Shorten {
//   // public id: number;
//   // public username: string;
//   // protected title: string;
//   constructor (public id: number,public username: string,protected title: string) {
//     // this.id = id;
//     // this.username = username;
//     // this.title = title;
//   }
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

/***task 6 */
// class Show {
//   public get title(){
//     return this._title;
//     }
//     public set title(val:string){
//       this._title=val;
//     }
//   constructor (private _title: string) {}

// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'

/***task 7 */
// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Play{
//   constructor(public id: number,public title: string,public level: number | string){

//   }
//   logIn():void{
//     console.log("Logged In");
//   }
//   logOut(msg:string):void{
// console.log( `Logged Out, ${msg}`);
//   }
// }

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye

/*******************************************************ass4 *******************************************************************/
/**task1 */
// // Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
//  class RPG extends Game {
//   constructor( title: string, price: numandstring, public rate: number) {
//     super(title,price);

//   }
//    getLocation():string{
//     return `Location`;
//   }
//   getDiscount():string{
//     return `Discount`;
//   }
// }

// class Action extends Game {
//   constructor(title: string, price: numandstring, public rate: number,public company?:string) {
//     super(title,price);

//   }
//   getLocation():string{
//     return `Location`;
//   }
//   getDiscount():string{
//     return `Discount`;
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"
/***task2 */

// // Write Function Code Here
// function showTypes<T="Nothing",T1="Nothing",T2="Nothing">(val?:T,val1?:T1,val2?:T2):string{
//   return `${val} - ${val1} - ${val2}`;
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

/**task 3 */

// Write Class Code Here
class Game<T>{
  constructor(public title:T,public price:number){
  }
  getDiscount(val:number|string):void{
   console.log(`The Discount Is ${val}`);
  }
}

// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"