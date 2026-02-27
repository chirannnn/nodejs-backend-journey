// basic types

let isDone: boolean = false;

let num: number = 2;

let str: string = "OOmmmm";

let list: number[] = [1, 2, 3];

let products: Array<string> = ["product 1", "Product 2"];

let randomVal: any = 4;
randomVal = "Niceee";
randomVal = false;
randomVal = [];

let xyz: undefined = undefined;

let yz: null = null;

enum Color {
  Red,
  Green,
  Blue,
}

let d: Color = Color.Red;

// tuple
let abc: [string, number] = ["Dear", 999];

// interfaces, types

interface User {
  id: number;
  name: string;
  email?: string; // optional
  readonly createAt: Date;
}

const user: User = {
  id: 1,
  name: "Noobie",
  createAt: new Date(),
};

type Product = {
  title: string;
  prict: number;
};

const product: Product = {
  title: "Who moved my cheese",
  prict: 250,
};

//functions with type annotations

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

function greet(name: string, greet?: string): string {
  return `${name} ${greet}`;
}

console.log(greet("Hyyyy"));
