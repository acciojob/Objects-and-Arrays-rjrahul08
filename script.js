const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create copies of the array and object
const team = players;
const team1 = [...players];
const cap1 = { ...person };

// Assign the variables to the global object (window)
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
