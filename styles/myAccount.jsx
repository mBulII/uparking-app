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
    fontSize: hp(3),
    color: colors.bg,
  },
  headerLogo: {
    height: hp(10),
    width: wp(70),
    marginTop: hp(3),
    alignSelf: "center",
  },

  contentContainer: {
    backgroundColor: colors.bg,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  subHeading: {
    fontSize: hp(2),
    color: colors.text,
    marginBottom: hp(10),
    marginLeft: wp(3),
  },

  labelText: {
    color: colors.text,
    fontSize: hp(2),
    marginLeft: wp(5),
    marginBottom: hp(1),
  },
  input: {
    borderWidth: 1,
    padding: 6.21,
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: 20,
    width: wp(93),
    alignSelf: "center",
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
    marginTop: hp(5),
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
    marginTop: hp(20),
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
});
