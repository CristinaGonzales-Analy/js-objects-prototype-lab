const person = {
  species: "Human",
  breathe() {
    return "Breathing...";
  }
};

const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];

manager.addTeamMember = function (name) {
  this.team.push(name);
};

manager.addTeamMember("Alice");
manager.addTeamMember("Bob");

//manager -> employee -> person -> Object.prototype -> null
console.log(manager.species);    
console.log(manager.company);     
console.log(manager.department);  
console.log(manager.breathe());   
