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
    marginBottom: hp(10),
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
    marginBottom: hp(1.8),
    alignSelf: "center",
  },
  formIcon: {
    fontSize: hp(2.7),
    color: colors.main,
    position: "absolute",
    zIndex: 1,
    left: wp(3.5),
    top: hp(1),
  },
  input: {
    borderWidth: 1,
    padding: 6.21,
    paddingLeft: wp(10),
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: 20,
    width: wp(93),
  },
  errorText: {
    fontSize: hp(1.5),
    color: colors.red,
    marginLeft: wp(4),
  },

  forgotContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: wp(5),
    marginBottom: hp(34.5),
  },
  forgotText: {
    fontSize: 15,
    color: colors.accent,
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

  feedbackContainer: {
    position: "absolute",
    top: hp(30),
    left: wp(15),
    backgroundColor: colors.main,
    borderRadius: 20,
    height: hp(30),
    width: wp(70),
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  feedbackText: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: colors.bg,
    textAlign: "center",
    paddingBottom: 30,
  },
  feedBackClose: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: colors.red,
    textAlign: "center",
  },
});
