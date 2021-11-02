import { getComputers } from "./player";

const KEY_LIKES = "likes";
const KEY_PLAYER = "player";
const KEY_COMPUTERS = "computers";

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, something) =>
  localStorage.setItem(key, JSON.stringify(something));

if (!getLocalStorage(KEY_COMPUTERS)) {
  const computers = getComputers();
  setLocalStorage(KEY_COMPUTERS, computers);
}

export {
  KEY_PLAYER,
  KEY_COMPUTERS,
  KEY_LIKES,
  getLocalStorage,
  setLocalStorage,
};
