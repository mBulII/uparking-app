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

  headerLogo: {
    height: hp(4.6),
    width: wp(50),
    marginLeft: wp(3),
    marginBottom: hp(2),
  },

  contentContainer: {
    backgroundColor: colors.bg,
    flex: 1,
  },

  titleContainer: {
    flexDirection: "row",
    marginVertical: hp(3),
    marginLeft: wp(3),
  },
  title1: {
    color: colors.text,
    fontSize: hp(3),
  },
  title2: {
    color: colors.accent,
    fontSize: hp(3),
  },

  textIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(13),
  },
  textContainer: {
    flexDirection: "row",
  },
  text1: {
    fontSize: hp(3),
    color: colors.text,
  },
  text2: {
    fontSize: hp(3),
    color: colors.accent,
  },
  guardIcon: {
    fontSize: hp(8),
    color: colors.main,
    marginTop: hp(7),
  },

  button1: {
    width: wp(90),
    height: hp(7),
    backgroundColor: colors.bg,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(4),
    borderWidth: 1,
    borderColor: colors.main,
    marginTop: hp(28),
  },
  button1Text: {
    fontSize: hp(2),
    color: colors.main,
  },
  button2: {
    width: wp(90),
    height: hp(7),
    backgroundColor: colors.main,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(4),
    marginTop: hp(3),
  },
  button2Text: {
    fontSize: hp(2),
    color: colors.bg,
  },
});
