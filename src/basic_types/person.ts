interface Person {
	firstName: string;
	lastName: string,
	age: Number
};

let personData: Person;

function setPerson(personData: Person) {
	this.personData = personData;
}

function getPerson(): Person{
	return this.personData;
}

