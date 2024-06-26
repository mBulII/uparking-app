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
    flex: 1,
    backgroundColor: colors.bg,
  },

  carContainer: {
    height: hp(25),
    width: wp(80),
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: hp(5),
    padding: 10,
    justifyContent: "space-between",
    marginTop: hp(3),
    alignSelf: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  featureText: {
    fontSize: hp(2.5),
    color: colors.text,
  },
  deleteButton: {
    height: hp(3),
    width: wp(30),
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: hp(2),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  deleteButtonText: {
    fontSize: hp(2),
    color: colors.red,
  },

  noDataContainer: {
    height: hp(25),
    width: wp(80),
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: hp(5),
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: hp(15),
  },
  noDataText: {
    fontSize: hp(5),
    textAlign: "center",
  },

  buttonContainer: {
    height: hp(18),
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: wp(90),
    height: hp(7),
    backgroundColor: colors.bg,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(4),
    borderWidth: 1,
    borderColor: colors.main,
  },
  buttonText: {
    color: colors.main,
    fontSize: hp(2.5),
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
    color: colors.bg,
    fontSize: hp(2.5),
  },
});
