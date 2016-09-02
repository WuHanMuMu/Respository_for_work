// import reduce = require("core-js/fn/array/reduce");
// /**
//  * Created by jlch on 16/8/17.
//  */
// //布尔值
// let isdone:boolean = false;
//
// //数字
// let a:number = 6;
//
// //字符串
// let str:string = 'abc';//单双引号都可以
//
// let name:string = `xiaoqiang`;
// let age:number = 18;
// let sentence:string = `hello,my name is ${name}.i'll be ${age + 1} years old next month`;
// console.log(sentence);
//
// //数组
// let list:number[] = [1,2,3];
// let list2:Array<number> = [1,2,3];//Array<元素类型>   数组泛型
//
// //元组
// let x:[string,number];
// x = ['hello',10];
//
// //枚举
// enum color {red,yellow,blue};//默认情况下,从0开始为元素标号
// let c:color = color.blue;
//
// enum Color {Red = 1, Green, Blue};
// let colorName: string = Color[2];
// console.log('-----'+colorName);

// //任意值  虽然可以为他赋值,但是却不能在它上面调用任意方法,即使它真的有种这些方法
// let a:any = 4;//想要为那些在编程阶段还不清楚类型的变量指定一个类型
// a = 'maybe a string';
// a = false;
// // a.ifItExists();//因为a是一个any类型,这个方法并不能被调用
// console.log(a);
//
// let list3:any[] = [1,true,'string'];
// list3[1] = 100;
// console.log(list3);
//
// // //空值
// // let b:void = null;
// // let b1:void = undefined;//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
// //
// // //Null和Undefined
// // let u:undefined = undefined;
// // let n:null = null;//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// // let num:number = undefined;
// // let num1:number = null;
//
// //类型断言
// let w:any = 'string';
// // let l:number = (<string>w).length;
// let l:number = (w as string).length;//两种写法
// console.log(l);
//
// /*
// * 关于let
//  你可能已经注意到了，我们使用let关键字来代替大家所熟悉的JavaScript关键字var。
//   let关键字是JavaScript的一个新概念，TypeScript实现了它。 我们会在以后详细介
//   绍它，很多常见的问题都可以通过使用 let来解决，所以尽可能地使用let来代替var吧。
// * */
//

// function f(shouldInitialize:boolean){
//     if (shouldInitialize){
//         var x = 10;
//     }
//     return x;
// }
// console.log('---'+f(true));
// console.log('++++'+f(false));

//
//
//
// for (var i = 0; i < 10; i++) {
//     setTimeout(
//         function(){
//             console.log(i);
//         },
//         500*i/*      500*i 是执行延迟的时间      */
//     );
// }
//
//
//
// function f(input: boolean) {
//     let a = 100;
//
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//
//     // Error: 'b' doesn't exist here
//     // return b;
// }
//
//
//
// try {
//     throw "oh no!";
// }
// catch (e) {
//     console.log("Oh well.");
// }
//
// // Error: 'e' doesn't exist here
// console.log(e);
//
// a++; // illegal to use 'a' before it's declared;
// let a:number = 1;
// a++;
// console.log(a);
//
//
// function foo() {
//     // okay to capture 'a'
//     return a;
// }
//
// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// // foo();
//
// let a;
//
//
//
// function f(condition, x) {
//     if (condition) {
//         let x = 100;
//         return x;
//     }
//
//     return x;
// }
//
// console.log(f(false, 0)); // returns 0
// console.log(f(true, 0)); // returns 100
//
//
//
// function sumMatrix(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//
//     return sum;
// }
// console.log(sumMatrix());
//
//
// function theCityThatAlwaysSleeps() {
//     let getCity;
//
//     if (true) {
//         let city = "Seattle";
//         getCity = function() {
//             return city;
//         }
//     }
//
//     return getCity();
// }
// console.log(theCityThatAlwaysSleeps());
//
//
// for (let i = 0; i < 10 ; i++) {
//     setTimeout(function() {console.log(i); }, 100 * i);
// }
//
//
// const numLivesForCat = 9;
// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }
//
// // Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };
//
// // all "okay"
// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;
//
//
//
// let input = [1, 'string'];
// let [first, second] = input;
// [first, second] = [second, first];
// console.log(first); // outputs 1
// console.log(second); // outputs 2
//
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f(input);
//
//
//
//
// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
//
//
//
// interface LabelledValue {
//     label: string;
//     size: number;
// }
//
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//     console.log(labelledObj.size);
// }
//
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
//
//
////可选属性
////带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white",area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// let mySquare = createSquare({color: "black",width:30});
// console.log(mySquare);



// //只读属性
// interface Point{
//     readonly x:number;
//     readonly y:number;
// }
// let p1:Point{
//     x:10;
//     y:20;
// }
// // p1.x = 2;
// console.log(p1.x);


// //TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把怕有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
// let a:number[] = [1,2,3,4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// a = ro as number[];//上面一行直接赋值是不可以的,需要用这种断言的方式写
// // ro as number     <number>ro


// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }



// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
//
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         .consolelog("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);



// //一个接口可以继承多个接口
// interface Shape {
//     color: string;
// }
//
// interface PenStroke {
//     penWidth: number;
// }
//
// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
//
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;


// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
//
// let c = getCounter();
// c(10);
// console.log(c(10));
// c.reset();
// console.log(c.reset());
// c.interval = 5.0;
// console.log(c.interval = 5.0);


//
// class Control {
//     private state: any;
// }
//
// interface SelectableControl extends Control {
//     select(): void;
// }
//
// class Button extends Control {
//     select() { }
// }
// class TextBox extends Control {
//     select() { }
// }
// class Image extends Control {
// }
// class Location {
//     select() { }
// }


// class Animal {
//     name:string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move();
// // console.log(sam.move());
// tom.move(34);
// // console.log(tom.move(34));



//
// function f() {
//     console.log("f(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }
//
// function g() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }
//
// class C {
//     @f()
//     @g()
//     method() {}
// }


//
// class Point {
//     private _x: number;
//     private _y: number;
//     constructor(x: number, y: number) {
//         this._x = x;
//         this._y = y;
//     }
//
//     @configurable(false)
//     get x() { return this._x; }
//
//     @configurable(false)
//     get y() { return this._y; }
// }
//
// function configurable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.configurable = value;
//     };
// }



// import "reflect-metadata";
//
// class Point {
//     x: number;
//     y: number;
// }
//
// class Line {
//     private _p0: Point;
//     private _p1: Point;
//
//     @validate
//     set p0(value: Point) { this._p0 = value; }
//     get p0() { return this._p0; }
//
//     @validate
//     set p1(value: Point) { this._p1 = value; }
//     get p1() { return this._p1; }
// }
//
// function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
//     let set = descriptor.set;
//     descriptor.set = function (value: T) {
//         let type = Reflect.getMetadata("design:type", target, propertyKey);
//         if (!(value instanceof type)) {
//             throw new TypeError("Invalid type.");
//         }
//     }
// }
//
// class Line {
//     private _p0: Point;
//     private _p1: Point;
//
//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p0(value: Point) { this._p0 = value; }
//     get p0() { return this._p0; }
//
//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p1(value: Point) { this._p1 = value; }
//     get p1() { return this._p1; }
// }

import {encode} from "punycode";
let redirect_uri:string = 'wechat.zhangtl.com';
let Redirect_uri:string = encodeURIComponent(redirect_uri);
console.log('=========  '+Redirect_uri);