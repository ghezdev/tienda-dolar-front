import { useState } from "react";
import {
  getComputersCanPlayAndDidNotClick,
  setComputerWhoClicked,
} from "../utils/player";
import { START_TIMING, WAITING_TIMING } from "../utils/countUp";

const random = () => {
  if (getComputersCanPlayAndDidNotClick().length > 0) {
    const random = Math.random() * START_TIMING;
    return Number(random.toFixed(1));
  }
  return WAITING_TIMING;
};

const useComputer = () => {
  const [timingComputer, setTimingComputer] = useState(random());

  const computerClick = () => {
    const computerClick = selectRandomComputer();
    setComputerWhoClicked(computerClick, timingComputer);

    // reset click of new computer
    setTimingComputer(random());
  };

  const selectRandomComputer = () => {
    const computersWhoDidNotClick = getComputersCanPlayAndDidNotClick();
    const indexComputerRandom = Math.random() * computersWhoDidNotClick.length;
    const indexComputerRandomNormalized = Math.trunc(indexComputerRandom);
    return computersWhoDidNotClick[indexComputerRandomNormalized];
  };

  return { timingComputer, computerClick };
};

export default useComputer;
