import { Dimensions, PixelRatio, Platform } from "react-native";

let SCREEN_HEIGHT = Dimensions.get("window").height;
let SCREEN_WIDTH = Dimensions.get("window").width;

export const windowHeight = (height) => {
  let tempHeight = SCREEN_HEIGHT * parseFloat(height / 667);
  return PixelRatio.roundToNearestPixel(tempHeight);
};

export const windowWidth = (width) => {
  let tempWidth = SCREEN_WIDTH * parseFloat(width / 375);
  return PixelRatio.roundToNearestPixel(tempWidth);
};

export const fontSizes = {
  FONT8: windowWidth(8),
  FONT10: windowWidth(10),
  FONT11: windowWidth(11),
  FONT12: windowWidth(12),
  FONT13: windowWidth(13),
  FONT14: windowWidth(14),
  FONT15: windowWidth(15),
  FONT16: windowWidth(16),
  FONT17: windowWidth(17),
  FONT18: windowWidth(18),
  FONT19: windowWidth(19),
  FONT20: windowWidth(20),
  FONT21: windowWidth(21),
  FONT22: windowWidth(22),
  FONT24: windowWidth(24),
  FONT26: windowWidth(26),
  FONT28: windowWidth(28),
  FONT30: windowWidth(30),
  FONT32: windowWidth(32),
  FONT34: windowWidth(34),
  FONT36: windowWidth(36),
  FONT42: windowWidth(42),
  FONT50: windowWidth(50),
};

export const WH = {
  APP_WIDTH: SCREEN_WIDTH,
  APP_HEIGHT: SCREEN_HEIGHT,
};

const guidelineBaseWidth = (width, height) => width < height ? 350 : 500;
const guidelineBaseHeight = (width, height) => width < height ? 680 : 350;

const scale = (size) => {
  const { width, height } = Dimensions.get('window');
  return (width / guidelineBaseWidth(width, height)) * size;
}

const verticalScale = (size) => {
  const { width, height } = Dimensions.get('window');
  return (height / guidelineBaseHeight(width, height)) * size;
}

export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

