import * as FONTSIZES from "../../components/atoms/fontSize";
import * as COLORS from "../../components/atoms/color";
import * as UNITS from "../../components/atoms/unit";

const registerForm = {
  backgroundColor: COLORS.POST_BG_WHITE,
  border: `1px solid ${COLORS.POST_BORDER}`,
  borderRadius: UNITS.UNIT_5,
  width: UNITS.UNIT_400,
  padding: UNITS.UNIT_15,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const title = { fontSize: FONTSIZES.FONT_VERY_BIG };

const textField = { marginBottom: UNITS.UNIT_20 };

const img = { width: UNITS.UNIT_200 };

const button = { marginTop: UNITS.UNIT_10 };

export { registerForm, title, textField, img, button };
