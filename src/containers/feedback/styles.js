import * as COLORS from "../../components/atoms/color";
import * as UNITS from "../../components/atoms/unit";

const feedback = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: COLORS.POST_BG_GREY,
  padding: UNITS.UNIT_5,
  alignItems: "center",
  borderRadius: `${UNITS.UNIT_5} 0 0 ${UNITS.UNIT_5}`,
};

const countLikes = { padding: `${UNITS.UNIT_5} 0`, margin: 0 };

const colorLike = (isEnabled) => {
  return isEnabled ? { color: COLORS.PRIMARY_BUTTON } : { color: COLORS.LIKE_WAITING };
};

const colorDislike = (isEnabled) => {
  return isEnabled ? { color: COLORS.ERROR_BUTTON } : { color: COLORS.LIKE_WAITING };
};

export { feedback, countLikes, colorLike, colorDislike };
