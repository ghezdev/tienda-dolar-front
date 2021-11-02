import Users from "../mocks/users.json";
import {
  KEY_PLAYER,
  KEY_COMPUTERS,
  getLocalStorage,
  setLocalStorage,
} from "./localStorage";
import { selectColor } from "./colorUsername";
import * as COLORS from "../components/atoms/color";

/* -------------------- UTILS -------------------- */

const didItClick = (timing) => timing !== -1;
const didNotItClick = (timing) => !didItClick(timing);
const didPlayPlayer = () => getLocalStorage(KEY_PLAYER)?.timing != -1;

const PLAYER_START_STRUCTURE = {
  timing: -1,
  canItClick: true,
  colorUsername: COLORS.USERNAME_GREY,
};

/* -------------------- GETS -------------------- */

const getComputers = () => {
  const computers = Users;

  return computers.map((computer, index) => {
    if (index == 6) {
      return {
        id: computer.id,
        username: computer.username,
        ...PLAYER_START_STRUCTURE,
        canItClick: false,
        colorUsername: COLORS.USERNAME_WHITE,
      };
    }
    return {
      id: computer.id,
      username: computer.username,
      ...PLAYER_START_STRUCTURE,
    };
  });
};

const getComputersWhoDidNotClick = () => {
  const computers = getLocalStorage(KEY_COMPUTERS);
  return computers.filter((computer) => didNotItClick(computer.timing));
};

const getComputersCanPlayAndDidNotClick = () => {
  const computersWhoDidNotClick = getComputersWhoDidNotClick();
  return computersWhoDidNotClick.filter((computer) => computer.canItClick);
};

const getPlayers = () => {
  const computers = getLocalStorage(KEY_COMPUTERS);
  const player = getLocalStorage(KEY_PLAYER);
  computers.push(player);
  return computers;
};

const getPlayersCanPlay = () => {
  const computers = getLocalStorage(KEY_COMPUTERS);
  const player = getLocalStorage(KEY_PLAYER);
  computers.push(player);
  return computers.filter((player) => player.canItClick);
};

/* -------------------- SETS -------------------- */

const setComputerWhoClicked = (computerDidClick, timingComputer) => {
  const computer = getLocalStorage(KEY_COMPUTERS);

  /* OPCIÓN 1 */
  const indexComputerDidClick = computerDidClick.id - 1;

  /* OPCIÓN 2 */
  // const indexComputerDidClick = computer.findIndex(
  //   (computer) => computer.id == computerDidClick.id
  // );

  computer[indexComputerDidClick].timing = timingComputer;
  computer[indexComputerDidClick].colorUsername = selectColor(timingComputer);
  setLocalStorage(KEY_COMPUTERS, computer);
};

/* -------------------- BUILDERS -------------------- */

const buildPlayer = (playerName) => {
  const playersOnline = getLocalStorage(KEY_COMPUTERS);
  return {
    id: playersOnline.length + 1,
    username: playerName,
    ...PLAYER_START_STRUCTURE,
  };
};

export {
  getComputers,
  getPlayers,
  getComputersCanPlayAndDidNotClick,
  getPlayersCanPlay,
  didPlayPlayer,
  setComputerWhoClicked,
  buildPlayer,
};
