import * as COLORS from "../components/atoms/color";

const selectColor = (counter) => {
  if (counter >= 52 && counter <= 60) return COLORS.USERNAME_PURPLE;
  if (counter >= 42 && counter <= 51.99) return COLORS.USERNAME_BLUE;
  if (counter >= 32 && counter <= 41.99) return COLORS.USERNAME_GREEN;
  if (counter >= 22 && counter <= 31.99) return COLORS.USERNAME_YELLOW;
  if (counter >= 12 && counter <= 21.99) return COLORS.USERNAME_ORANGE;
  if (counter >= 0 && counter <= 11.99) return COLORS.USERNAME_RED;
};

const colorIdentifier = (color) => {
  if (color == COLORS.USERNAME_PURPLE) return 0
  if (color == COLORS.USERNAME_BLUE) return 1;
  if (color == COLORS.USERNAME_GREEN) return 2;
  if (color == COLORS.USERNAME_YELLOW) return 3;
  if (color == COLORS.USERNAME_ORANGE) return 4;
  if (color == COLORS.USERNAME_RED) return 5;
  if (color == COLORS.USERNAME_GREY) return 6;
  if (color == COLORS.USERNAME_WHITE) return 7;
}

export { selectColor, colorIdentifier };
