class Room {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`This is the ${this.name}`);
  }
}

class House {
  constructor(address) {
    this.address = address;
    this.rooms = [];
    this.addRoom("Living Room");
    this.addRoom("Kitchen");
  }

  addRoom(name) {
    const room = new Room(name);
    this.rooms.push(room);
  }

  displayRooms() {
    this.rooms.forEach((room) => room.display());
  }
}

const house = new House("123 Main St");
house.displayRooms(); // Відображає всі кімнати в будинку
console.log(house.rooms);
