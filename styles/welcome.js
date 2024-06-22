import { StyleSheet } from "react-native";
import { hp, wp } from "../constants/device";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
    paddingTop: hp(5),
    backgroundColor: colors.main,
  },

  image: {
    height: hp(10),
    width: wp(100),
    marginTop: hp(11),
  },

  gradient: {
    position: "absolute",
    width: wp(100),
    height: hp(50),
    bottom: 0,
  },

  bottomContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  appImage: {
    height: hp(10),
    width: wp(80),
    marginBottom: hp(22),
  },
  button: {
    marginBottom: hp(5),
    backgroundColor: colors.main,
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: 50,
    borderCurve: "continuous",
  },
  text: {
    color: colors.bg,
    fontSize: hp(3),
    letterSpacing: 1,
  },
});
