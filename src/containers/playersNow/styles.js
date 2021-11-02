import * as FONTSIZES from "../../components/atoms/fontSize";
import * as COLORS from "../../components/atoms/color";
import * as UNITS from "../../components/atoms/unit";

const players = {
  width: UNITS.UNIT_300,
  backgroundColor: COLORS.PLAYERSLIST_BG_WHITE,
  border: `1px solid ${COLORS.PLAYERSLIST_BORDER}`,
  borderRadius: UNITS.UNIT_5,
};

const playersTitle = {
  backgroundColor: COLORS.PLAYERSLIST_BG_GREY,
  padding: UNITS.UNIT_10,
  borderRadius: `${UNITS.UNIT_5} ${UNITS.UNIT_5} 0 0`,
};

const playersTitleFont = {
  fontSize: FONTSIZES.FONT_SMALL,
  color: COLORS.PLAYERSLIST_TITLE_WHITE,
  fontWeight: "bold",
};

const playersBody = { padding: UNITS.UNIT_10 };

const itemPlayer = { display: "flex", alignItems: "center" };

const imgProfile = { width: UNITS.UNIT_30 };

const username = (colorUsername) => ({
  margin: `${UNITS.UNIT_5} ${UNITS.UNIT_10} 0 ${UNITS.UNIT_10}`,
  color: colorUsername,
});

export {
  players,
  playersTitle,
  playersTitleFont,
  playersBody,
  itemPlayer,
  imgProfile,
  username,
};
