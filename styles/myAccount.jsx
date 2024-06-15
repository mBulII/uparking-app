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
    height: hp(8),
    width: wp(50),
    marginLeft: wp(3),
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

  subHeadingContainer: {
    flexDirection: "row",
    marginLeft: wp(3),
    marginBottom: hp(4),
  },
  subHeading: {
    fontSize: hp(2),
    color: colors.text,
  },
  subHeading2: {
    fontSize: hp(2),
    color: colors.accent,
  },

  labelText: {
    color: colors.text,
    fontSize: hp(2),
    marginLeft: wp(5),
    marginBottom: hp(1),
    marginTop: hp(2),
  },
  input: {
    borderWidth: 1,
    padding: 6.21,
    paddingLeft: wp(5),
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: 20,
    width: wp(93),
    alignSelf: "center",
    marginBottom: hp(1),
  },
  errorText: {
    fontSize: hp(1.5),
    color: colors.red,
    marginLeft: wp(8),
  },
  saveButton: {
    width: wp(50),
    height: hp(5),
    backgroundColor: colors.main,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: hp(3),
  },
  saveButtonText: {
    fontSize: hp(2),
    color: colors.bg,
  },

  button1: {
    width: wp(90),
    height: hp(7),
    backgroundColor: colors.bg,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.main,
    marginTop: hp(10),
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
    borderRadius: 20,
    marginTop: hp(3),
  },
  button2Text: {
    fontSize: hp(2),
    color: colors.bg,
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
