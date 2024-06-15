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

  button: {
    backgroundColor: colors.main,
    width: wp(90),
    height: hp(7),
    borderRadius: 50,
    alignItems: "center",
    marginTop: hp(22),
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
