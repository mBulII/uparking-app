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
    marginTop: hp(3),
    position: "relative",
  },
  deleteNotificationContainer: {
    position: "absolute",
    right: wp(2),
    top: hp(1),
  },
  deleteNotificationText: {
    fontSize: hp(1.5),
    color: colors.red,
  },
  reportIcon: {
    fontSize: hp(6),
    color: colors.main,
  },
  reportText: {
    fontSize: hp(2),
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: hp(0.5),
  },

  bottomButtonContainer: {
    height: hp(9),
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
  button: {
    width: wp(90),
    height: hp(7),
    backgroundColor: colors.main,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(4),
  },
  buttonText: {
    fontSize: hp(3),
    color: colors.bg,
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
