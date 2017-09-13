var monkey = { 
	name: "",
	species: "",
	favoriteFoods: "",
	eatSomething: function() {
		console.log(this.name + " ate " + this.favoriteFoods + ".");
	},
	introduce: function() {
		console.log("Hi, this monkey is named " + this.name + ", and he is a " + this.species + ". His favorite food is " + this.favoriteFoods + ".");
	}
};

var monkey1 = {
	name: "Harambe",
	species: "gorilla",
	favoriteFoods: "banana",
	eatSomething: function() {
		console.log(this.name + " ate " + this.favoriteFoods + ".");
	},
	introduce: function() {
		console.log("Hi, this monkey is named " + this.name + ", and he is a " + this.species + ". His favorite food is " + this.favoriteFoods + ".");
	}
};

var monkey2 = {
	name: "Diddy Kong",
	species: "spider monkey",
	favoriteFoods: "honey",
	eatSomething: function() {
		console.log(this.name + " ate " + this.favoriteFoods + ".");
	},
	introduce: function() {
		console.log("Hi, this monkey is named " + this.name + ", and he is a " + this.species + ". His favorite food is " + this.favoriteFoods + ".");
	}
};

var monkey3 = {
	name: "Curious George",
	species: "Barbary Macaque",
	favoriteFoods: "cake",
	eatSomething: function() {
		console.log(this.name + " ate " + this.favoriteFoods + ".");
	},
	introduce: function() {
		console.log("Hi, this monkey is named " + this.name + ", and he is a " + this.species + ". His favorite food is " + this.favoriteFoods + ".");
	} 
};