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
    marginTop: hp(3),
    marginBottom: hp(1),
    textAlign: "center",
  },
  formSubHeading: {
    color: colors.text,
    fontSize: hp(3),
    textAlign: "center",
    marginBottom: hp(20),
  },

  button1: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.main,
    width: wp(90),
    height: hp(8),
    borderRadius: hp(4),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: hp(3),
  },
  button1Text: {
    color: colors.main,
    fontSize: hp(2.5),
  },
  button2: {
    backgroundColor: colors.main,
    width: wp(90),
    height: hp(8),
    borderRadius: hp(4),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button2Text: {
    color: colors.bg,
    fontSize: hp(2.5),
  },
});
