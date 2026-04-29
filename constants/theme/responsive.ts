import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;   // iPhone baseline
const guidelineBaseHeight = 812;

//horizontal measurements width, horizontal spacing, ;eft/right padding, icon width
export const scale = (size: number) =>
  (width / guidelineBaseWidth) * size;

//vertical measurements button height, card height, top/bottom spacing, hero sections
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

//default font sizes, padding ,margin, border, radiusicon sizes, button heights
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const fontScale = (size: number) =>
  size / PixelRatio.getFontScale();

export const Screen = {
  width,
  height,
  isSmall: width < 360,
  isTablet: width >= 768,
};