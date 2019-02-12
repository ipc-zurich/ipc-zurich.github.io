import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class Store extends EventEmitter {
  constructor() {
    super();
    this.date = "friSun";
    this.accomodation = "yes";
    this.room = "singleWcShower";
    this.showRoom = true;
    this.kids = [];
    this.adults = [];
    this.roomPrices = [
      {
        date: "friSun",
        price: {
          singleWcShower: 170,
          singleWc: 160,
          single: 140,
          doubleWcShower: 320,
          double: 260
        }
      },
      {
        date: "satSun",
        price: {
          singleWcShower: 85,
          singleWc: 80,
          single: 70,
          doubleWcShower: 160,
          double: 130
        }
      }
    ];

    this.mealPrices = [
      {
        date: "friSun",
        price: 80,
        baby: 0,
        kid: 30
      },
      {
        date: "satSun",
        price: 60,
        baby: 0,
        kid: 30
      }
    ];

    this.childPrices = [
      {
        age: "baby",
        price: {
          friSun: 0,
          satSun: 0,
          mealsOnly: {
            friSun: 0,
            satSun: 0
          }
        }
      },
      {
        age: "child",
        price: {
          friSun: 60,
          satSun: 30,
          mealsOnly: {
            friSun: 45,
            satSun: 30
          }
        }
      },
      {
        age: "youth",
        price: {
          friSun: 90,
          satSun: 45,
          mealsOnly: {
            friSun: 45,
            satSun: 30
          }
        }
      }
    ];

    this.total = this.roomPrices[0].price[this.room];
  }

  getDate() {
    return this.date;
  }

  getDateTextFriSun() {
    if (this.accomodation === "yes") {
      return "";
    } else {
      const index = this.mealPrices.findIndex(x => x.date === "friSun");
      return "- CHF " + this.mealPrices[index].price + ".00";
    }
  }

  getDateTextSatSun() {
    if (this.accomodation === "yes") {
      return "";
    } else {
      const index = this.mealPrices.findIndex(x => x.date === "satSun");
      return "- CHF " + this.mealPrices[index].price + ".00";
    }
  }

  getRoomPrice() {
    if (this.accomodation !== "mealsOnly") {
      const index = this.roomPrices.findIndex(x => x.date === this.date);
      return this.roomPrices[index].price[this.room];
    } else {
      return 0;
    }
  }

  getRoomPrices() {
    const index = this.roomPrices.findIndex(x => x.date === this.date);
    return this.roomPrices[index].price;
  }

  getMealPrices() {
    return this.mealPrices;
  }

  getBabyPrice() {
    const index = this.childPrices.findIndex(x => x.age === "baby");
    if (this.accomodation === "yes") {
      return this.childPrices[index].price[this.date];
    } else {
      return this.childPrices[index].price.mealsOnly[this.date];
    }
  }

  getChildPrice() {
    const index = this.childPrices.findIndex(x => x.age === "child");
    if (this.accomodation === "yes") {
      return this.childPrices[index].price[this.date];
    } else {
      return this.childPrices[index].price.mealsOnly[this.date];
    }
  }

  getYouthPrice() {
    const index = this.childPrices.findIndex(x => x.age === "youth");
    if (this.accomodation === "yes") {
      return this.childPrices[index].price[this.date];
    } else {
      return this.childPrices[index].price.mealsOnly[this.date];
    }
  }

  getDateNames() {
    return this.mealPrices;
  }

  getKids() {
    return this.kids;
  }
  getAdults() {
    return this.adults;
  }
  getRoom() {
    return this.room;
  }
  getTotal() {
    return this.total;
  }
  getShowRoom() {
    return this.showRoom;
  }

  getAccomodation() {
    return this.accomodation;
  }

  handleDate(date) {
    this.date = date;
  }

  handleShowRoom() {
    if (this.accomodation === "mealsOnly") {
      this.showRoom = false;
    } else {
      this.showRoom = true;
    }
  }

  setAccomodation(value) {
    this.accomodation = value;
  }

  removeKid(key) {
    const index = this.kids.findIndex(x => x.key === key);
    if (index !== -1) {
      this.kids.splice(index, 1);
    }
  }

  changeKid(key, age, name) {
    const index = this.kids.findIndex(x => x.key === key);
    if (index !== -1) {
      this.kids[index].name = name;
      this.kids[index].age = age;
    }
  }

  addKid() {
    var d = new Date();
    var time = d.getTime();
    this.kids.push({ key: time, age: "baby", name: "" });
  }

  addAdult() {
    var d = new Date();
    var time = d.getTime();
    this.adults.push({ key: time, name: "" });
  }

  removeAdult(key) {
    const index = this.adults.findIndex(x => x.key === key);
    if (index !== -1) {
      this.adults.splice(index, 1);
    }
  }

  changeAdult(key, name) {
    const index = this.adults.findIndex(x => x.key === key);
    if (index !== -1) {
      this.adults[index].name = name;
    }
  }

  calcTotal() {
    var i = 0;
    var price = 0;
    var total = 0;
    var roomPrice = this.getRoomPrice();
    var countAdults = this.adults.length + 1;
    var countKids = this.countKids();

    if (this.accomodation === "mealsOnly") {
      // Calc Addult
      const index = this.mealPrices.findIndex(x => x.date === this.date);
      price = this.mealPrices[index].price;
      total = total + price * countAdults;

      // Calc Kids
      for (i = 0; i < countKids.length; i++) {
        price = this.childPrices[i].price.mealsOnly[this.date];
        total = total + price * countKids[i];
      }
    } else {
      total = total + roomPrice;
      // Calc Kids
      for (i = 0; i < countKids.length; i++) {
        price = this.childPrices[i].price[this.date];
        total = total + price * countKids[i];
      }
    }
    // Todo: Add kids
    this.total = total;
    this.emit("Total_changed");
  }

  countKids() {
    var countKids = [0, 0, 0]; // Babies, Children, Youth
    this.kids.forEach(function(element) {
      if (element.age === "baby") {
        countKids[0]++;
      } else if (element.age === "child") {
        countKids[1]++;
      } else {
        countKids[2]++;
      }
    });
    return countKids;
  }

  handleActions(action) {
    switch (action.type) {
      case "SET_INFO":
        this[action.val] = action.text;
        this.emit("Info_changed");
        break;
      case "SET_DATE":
        // Todo: use switch to set info
        this.handleDate(action.text);
        this.calcTotal();
        this.emit("Date_changed");
        break;
      case "SET_ROOM":
        this.room = action.text;
        this.calcTotal();
        this.emit("Room_changed");
        break;
      case "ADD_KID":
        // Todo: use switch to set info
        this.addKid();
        this.calcTotal();
        this.emit("Kids_changed");
        break;
      case "REMOVE_KID":
        // Todo: use switch to set info
        this.removeKid(action.key);
        this.calcTotal();
        this.emit("Kids_changed");
        break;
      case "CHANGE_KID":
        // Todo: use switch to set info
        this.changeKid(action.key, action.age, action.name);
        this.calcTotal();
        this.emit("Kids_changed");
        break;
      case "ADD_ADULT":
        // Todo: use switch to set info
        this.addAdult();
        this.calcTotal();
        this.emit("Adults_changed");
        break;
      case "REMOVE_ADULT":
        // Todo: use switch to set info
        this.removeAdult(action.key);
        this.calcTotal();
        this.emit("Adults_changed");
        break;
      case "CHANGE_ADULT":
        // Todo: use switch to set info
        this.changeAdult(action.key, action.name);
        this.calcTotal();
        this.emit("Adults_changed");
        break;
      case "SET_ACCOMODATION":
        // Todo: use switch to set info
        this.setAccomodation(action.value);
        this.handleShowRoom();
        this.calcTotal();
        this.emit("Accomodation_changed");
        break;
    }
  }
}

const store = new Store();

dispatcher.register(store.handleActions.bind(store));

export default store;
