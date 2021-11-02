import * as FONTSIZES from "../../atoms/fontSize";
import * as COLORS from "../../atoms/color";
import * as UNITS from "../../atoms/unit";

const post = {
  backgroundColor: COLORS.POST_BG_WHITE,
  border: `1px solid ${COLORS.POST_BORDER}`,
  borderRadius: UNITS.UNIT_5,
  width: UNITS.UNIT_650,
  marginRight: UNITS.UNIT_25,
  display: "flex",
};

const content = { padding: UNITS.UNIT_10};

const contentTitle = {
  fontSize: FONTSIZES.FONT_NORMAL,
  margin: 0,
  lineHeight: UNITS.UNIT_25,
};

const posted = {
  margin: `0 0 ${UNITS.UNIT_10} 0`,
  fontSize: FONTSIZES.FONT_TINY_SMALL,
  color: COLORS.POST_POSTED,
};

export { post, content, contentTitle, posted };
