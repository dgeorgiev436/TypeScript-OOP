// Setting interface for functions
interface AddNumber{
	(a: number, b: number): number;
}

let add: AddNumber

add = (n1: number, n2: number) => {
	return n1 + n2;
}

// Creating Person interface.
// It allows to define the structure of objects. 
// Used as a type to type check object that must have the same structure.
interface Named {
	readonly name?: string;
	outputName?: string;
}


// Greetable interface inherits from Named interface
interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age = 30;
	
	
	constructor(n?: string) {
		if(n){
			this.name = n;	
		}
	}
	
	greet(phrase: string){
		if(this.name){
			console.log(phrase + " " + this.name)	
		}else{
			console.log("No name provided")
		}
	}
}

let user1: Greetable;

user1 = new Person();
	
	
user1.greet("HI There i am Max");

console.log(user1);