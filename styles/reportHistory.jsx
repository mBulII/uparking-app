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
    flex: 1,
    backgroundColor: colors.bg,
  },

  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    marginLeft: wp(3),
    marginTop: hp(3),
  },

  reportContainer: {
    width: wp(90),
    height: hp(22),
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: wp(5),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp(4),
  },
  reportIcon: {
    fontSize: hp(8),
    color: colors.main,
  },
  reportText: {
    fontSize: hp(2),
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold",
  },

  bottomButtonContainer: {
    height: hp(9),
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
  button: {
    width: wp(80),
    height: hp(6),
    borderRadius: 20,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: hp(3),
    color: colors.bg,
  },
});
