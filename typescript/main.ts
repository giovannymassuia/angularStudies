export { }
let message = 'Hello World 2';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Giovanny';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c);

let ramdomValue: any = 10;
ramdomValue = true;
ramdomValue = 'Giovanny';

let myVariable: any = 10;
console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();

let myVariable2: unknown = 10;
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//(myVariable2 as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;
//multiType = ''; //not possible

let anyType: any;
anyType = 20;
anyType = true;

function add(num1: number, num2?: number): number {
    if (num2) //trata undefied
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(1);

function sub(num1: number, num2: number = 10): number {
    if (num2) //trata undefied
        return num1 + num2;
    else
        return num1;
}
sub(1, 2);
sub(1);

//---------------------------------------------------------------------------
function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);

//---------------------------------------------------------------------------
interface Person {
    firstName: string;
    lastName?: string;
}
function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p2 = {
    firstName: 'Bruce'
};
fullName2(p2);
//---------------------------------------------------------------------------

class Employee {
    public employeeName: string;
    private lastName: string;
    protected protectedProp: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1: Employee = new Employee('Gio');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log('delegate works' + this.protectedProp);
    }
}
let man1: Manager = new Manager('Manager');
console.log(man1.employeeName);
man1.greet();
man1.delegateWork();