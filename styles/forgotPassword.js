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
    fontSize: hp(3),
    color: colors.bg,
    marginLeft: wp(3),
  },

  formContainer: {
    backgroundColor: colors.bg,
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
    flex: 1,
    flexDirection: "column",
    marginTop: hp(6),
  },
  formTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: hp(5),
    marginTop: hp(2),
    marginBottom: hp(1),
    textAlign: "center",
  },
  formSubHeading: {
    color: colors.text,
    fontSize: hp(3),
    marginTop: hp(2),
    marginBottom: hp(12),
    textAlign: "center",
  },

  labelText: {
    color: colors.text,
    fontSize: hp(1.7),
    fontWeight: "bold",
    marginLeft: wp(7),
  },
  formGroup: {
    marginBottom: hp(1.8),
    alignSelf: "center",
  },
  inputContainer: {
    position: "relative",
    width: wp(93),
  },
  input: {
    borderWidth: 1,
    padding: hp(1),
    paddingLeft: wp(10),
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: hp(2.5),
    width: "100%",
    height: hp(5),
  },
  formIcon: {
    fontSize: hp(2.7),
    color: colors.main,
    position: "absolute",
    zIndex: 1,
    left: wp(3.5),
    top: "50%",
    transform: [{ translateY: -hp(2.7) / 2 }],
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
    marginBottom: hp(33),
  },
  forgotText: {
    fontSize: hp(2),
    color: colors.accent,
  },

  button: {
    backgroundColor: colors.main,
    width: wp(90),
    height: hp(7),
    borderRadius: hp(4),
    alignItems: "center",
    marginTop: hp(30),
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: colors.bg,
    fontSize: hp(2.5),
  },

  feedbackContainer: {
    position: "absolute",
    top: hp(30),
    left: wp(15),
    backgroundColor: colors.main,
    borderRadius: hp(3),
    height: hp(40),
    width: wp(70),
    paddingHorizontal: wp(2),
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
