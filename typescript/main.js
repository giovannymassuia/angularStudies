"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World 2';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Giovanny';
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var ramdomValue = 10;
ramdomValue = true;
ramdomValue = 'Giovanny';
var myVariable = 10;
console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();
var myVariable2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//(myVariable2 as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
//multiType = ''; //not possible
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2) //trata undefied
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(1);
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) //trata undefied
        return num1 + num2;
    else
        return num1;
}
sub(1, 2);
sub(1);
//---------------------------------------------------------------------------
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: 'Bruce'
};
fullName2(p2);
//---------------------------------------------------------------------------
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Gio');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('delegate works' + this.protectedProp);
    };
    return Manager;
}(Employee));
var man1 = new Manager('Manager');
console.log(man1.employeeName);
man1.greet();
man1.delegateWork();
