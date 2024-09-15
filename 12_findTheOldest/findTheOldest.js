const findTheOldest = function (personsArr) {
  const age = personsArr
    .map((person) => {
      return {
        name: person.name,
        age: person.yearOfDeath
          ? person.yearOfDeath - person.yearOfBirth
          : new Date().getFullYear() - person.yearOfBirth,
      };
    })
    .sort((a, b) => b.age - a.age)[0];
  return age;
};

// Do not edit below this line
module.exports = findTheOldest;
