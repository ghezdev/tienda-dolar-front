import { getPlayers } from "./player";
import { colorIdentifier } from "../utils/colorUsername";
import * as COLORS from "../components/atoms/color";

/* -------------------- BUILDERS -------------------- */

const buildData = () => {
  let dataChart = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const players = getPlayers();
  players.forEach((player) => {
    const idColor = colorIdentifier(player.colorUsername);
    dataChart[idColor] += 1;
  });
  return dataChart;
};

const buildConfig = (data) => ({
  labels: [
    "60s - 52s",
    "51.9s - 42s",
    "41.9s - 32s",
    "31.9s - 22s",
    "21.9s - 12s",
    "11.9s - 0s",
    "Did not click",
    "Not able to click",
  ],
  datasets: [
    {
      data,
      backgroundColor: [
        COLORS.USERNAME_PURPLE,
        COLORS.USERNAME_BLUE,
        COLORS.USERNAME_GREEN,
        COLORS.USERNAME_YELLOW,
        COLORS.USERNAME_ORANGE,
        COLORS.USERNAME_RED,
        COLORS.USERNAME_GREY,
        COLORS.USERNAME_WHITE,
      ],
    },
  ],
});

/* -------------------- CONFIGS -------------------- */

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 1,
        beginAtZero: true,
      },
    },
  },
};

export { buildData, buildConfig, options };
