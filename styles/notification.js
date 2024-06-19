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

  notificationBox: {
    width: wp(90),
    height: hp(22),
    padding: 10,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: hp(4),
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: hp(2),
  },
  notificationTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
  },
  notificationDate: {
    alignSelf: "flex-end",
    fontSize: hp(2),
    color: colors.grey,
  },
  notificationIcon: {
    fontSize: hp(5),
    color: colors.main,
    alignSelf: "center",
  },
  notificationMessage: {
    fontSize: hp(2),
    textAlign: "center",
  },

  buttonContainer: {
    height: hp(10),
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: wp(80),
    height: hp(6),
    borderRadius: hp(4),
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: hp(3),
    color: colors.bg,
  },

  noNotificationBox: {
    width: wp(90),
    height: hp(22),
    padding: 10,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: hp(4),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp(2),
  },
  noNotificationIcon: {
    fontSize: hp(8),
    color: colors.main,
    alignSelf: "center",
  },
});
