import dispatcher from "../dispatcher";

export function setInfo(val, text) {
  dispatcher.dispatch({
    type: "SET_INFO",
    val,
    text
  });
}

export function setDate(text) {
  dispatcher.dispatch({
    type: "SET_DATE",
    text
  });
}

export function addKid() {
  dispatcher.dispatch({
    type: "ADD_KID"
  });
}

export function removeKid(key) {
  dispatcher.dispatch({
    type: "REMOVE_KID",
    key
  });
}

export function changeKid(key, age, name) {
  dispatcher.dispatch({
    type: "CHANGE_KID",
    key,
    age,
    name
  });
}

export function addAdult() {
  dispatcher.dispatch({
    type: "ADD_ADULT"
  });
}

export function removeAdult(key) {
  dispatcher.dispatch({
    type: "REMOVE_ADULT",
    key
  });
}

export function changeAdult(key, name) {
  dispatcher.dispatch({
    type: "CHANGE_ADULT",
    key,
    name
  });
}

export function setAccomodation(value) {
  dispatcher.dispatch({
    type: "SET_ACCOMODATION",
    value
  });
}

export function setRoom(text) {
  dispatcher.dispatch({
    type: "SET_ROOM",
    text
  });
}
