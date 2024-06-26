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
    resizeMode: "repeat",
    alignSelf: "center",
    height: hp(10),
    width: wp(100),
    marginTop: hp(40),
  },
  bottomContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  appImage: {
    height: hp(8),
    resizeMode: "contain",
    width: wp(70),
    marginBottom: hp(60),
  },
  button: {
    marginBottom: hp(5),
    backgroundColor: colors.bg,
    borderRadius: hp(2),
    justifyContent: "center",
    alignItems: "center",
    width: wp(35),
    height: hp(8),
  },
  text: {
    color: colors.main,
    fontSize: hp(3),
  },
});
