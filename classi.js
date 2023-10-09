class User {
  constructor(_firstName, _lastName, _age, _location) {
    (this.firstName = _firstName),
      (this.lastName = _lastName),
      (this.age = _age),
      (this.location = _location);
  }

  compareAge(otherUser) {
    if (this.age === otherUser.age) {
      return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} è più grande di ${otherUser.firstName} ${otherUser.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}`;
    }
  }
}

const user1 = new User("Carmen", "Caniglia", 30, "Italia");
const user2 = new User("John", "Snow", 30, "Grande Inverno");
const user3 = new User("Sansa", "Stark", 20, "Grande Inverno");

console.log(user1.compareAge(user2));
console.log(user1.compareAge(user3));
console.log(user3.compareAge(user2));

// esercizio 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    (this.petName = _petName),
      (this.ownerName = _ownerName),
      (this.species = _species),
      (this.breed = _breed);
  }
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}
const petList = [];

function addPet() {
  // prendo i riferimenti nel DOM
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(_petName, _ownerName, _species, _breed);
  petList.push(newPet);

  //   aggiungo il pet alla lista
  const petListElement = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, Specie: ${newPet.species}, Razza: ${newPet.breed}`;
  petListElement.appendChild(listItem);

  // verifica per lo stesso proprietario
  const sameOwnerPets = petList.filter((pet) => pet.hasSameOwner(newPet));
  if (sameOwnerPets.length > 1) {
    alert(
      `Ci sono ${sameOwnerPets.length} animali con lo stesso proprietario: ${ownerName}`
    );
  }

  document.getElementById("petForm").reset();
}
