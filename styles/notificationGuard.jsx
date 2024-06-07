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
    marginBottom: hp(7),
  },

  notificationBox: {
    width: wp(90),
    height: hp(19.3),
    padding: 10,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp(5),
  },
  notificationIcon: {
    fontSize: hp(5),
    color: colors.main,
    alignSelf: "center",
    marginBottom: hp(2),
  },
  notificationText: {
    fontSize: hp(2),
    textAlign: "center",
    color: colors.text,
  },

  button: {
    width: wp(80),
    height: hp(6),
    borderRadius: 20,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(15),
  },
  buttonText: {
    fontSize: hp(3),
    color: colors.bg,
  },
});
