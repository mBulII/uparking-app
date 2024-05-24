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

  headerIcon: {
    marginLeft: wp(3),
  },
  headerLogo: {
    height: hp(10),
    width: wp(70),
    marginTop: hp(3),
    alignSelf: "center",
  },

  formContainer: {
    backgroundColor: colors.bg,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    flexDirection: "column",
  },
  formTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: hp(5),
    marginLeft: wp(2),
    marginTop: hp(2),
  },
  formSubheading: {
    color: colors.text,
    fontSize: hp(2),
    marginBottom: hp(2),
    marginLeft: wp(2),
  },

  labelText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: wp(7),
  },
  formGroup: {
    position: "relative",
    marginBottom: hp(1.6),
    alignSelf: "center",
  },
  formIcon: {
    fontSize: hp(2.7),
    color: colors.main,
    position: "absolute",
    zIndex: 1,
    left: wp(3.5),
    top: hp(0.7),
  },
  input: {
    borderWidth: 1,
    height: hp(4.2),
    paddingLeft: wp(10),
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: 20,
    width: wp(93),
  },

  buttonContainer: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: colors.main,
    width: wp(93),
    height: hp(4),
    borderRadius: 50,
    borderCurve: "continuous",
    alignItems: "center",
    marginBottom: hp(1.5),
    justifyContent: "center",
  },
  buttonText: {
    color: colors.bg,
    fontSize: hp(2.5),
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: hp(5.3),
  },
  bottomText1: {
    color: colors.grey,
    fontSize: 15,
  },
  bottomText2: {
    color: colors.accent,
    fontSize: 15,
  },
});
