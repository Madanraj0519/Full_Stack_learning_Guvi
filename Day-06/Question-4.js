class Uber {
    constructor(name, StartingLocation, destination) {
      this.name = name;
      this.StartingLocation = StartingLocation;
      this.destination = destination;
    }
    fair() {
      let fairPerKm = 5;
      if (this.StartingLocation && this.destination) {
        console.log(
          `your fair is ${Math.ceil(fairPerKm * (Math.random() * 10 + 1))}`
        );
      } else {
        console.log("Location not Valid");
      }
    }
  }