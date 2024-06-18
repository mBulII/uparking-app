import { StyleSheet } from "react-native";
import { hp, wp } from "../constants/device";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  //main container
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    paddingTop: hp(5),
    backgroundColor: colors.main,
  },

  headerLogo: {
    height: hp(8),
    width: wp(50),
    marginLeft: wp(3),
    color: colors.main,
  },

  contentContainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  modalTest: {
    width: wp(30),
    height: hp(5),
    backgroundColor: colors.main,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
  },
  modalOpenText: {
    fontSize: hp(2),
    color: colors.bg,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.transparent,
  },
  modalContainer: {
    backgroundColor: colors.bg,
    padding: hp(2),
    height: hp(60),
    width: wp(100),
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
  },
  modalTitleContainer: {
    flexDirection: "row",
    marginTop: hp(3),
  },
  modalTitle1: {
    fontSize: hp(3),
    color: colors.text,
  },
  modalTitle2: {
    fontSize: hp(3),
    color: colors.accent,
  },
  modalRedIcon: {
    fontSize: hp(7),
    color: colors.red,
    marginLeft: wp(10),
  },
  modalYellowIcon: {
    fontSize: hp(7),
    color: colors.yellow,
    marginLeft: wp(10),
  },
  modalGreenIcon: {
    fontSize: hp(7),
    color: colors.green,
    marginLeft: wp(10),
  },
  modalTextContainer: {
    flexDirection: "row",
  },
  modalText: {
    fontSize: hp(2.2),
    color: colors.text,
    marginTop: hp(2),
  },
  modalModifyTitle: {
    fontSize: hp(3),
    color: colors.text,
    fontWeight: "bold",
    marginBottom: hp(1),
    marginTop: hp(7),
    alignSelf: "center",
  },
  modalModifyIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(15),
  },
  modalModifyIcon: {
    fontSize: hp(7),
    color: colors.grey,
  },
  modalModifyIconSelected: {
    fontSize: hp(7),
    color: colors.main,
  },
  modalModifyNumber: {
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: hp(3),
    width: wp(20),
    height: hp(10),
    justifyContent: "center",
    alignItems: "center",
  },
  modalModifyNumberTextRed: {
    fontSize: hp(4),
    color: colors.red,
  },
  modalModifyNumberTextYellow: {
    fontSize: hp(4),
    color: colors.yellow,
  },
  modalModifyNumberTextGreen: {
    fontSize: hp(4),
    color: colors.green,
  },
  modalCloseButton: {
    height: hp(7),
    width: wp(80),
    borderRadius: hp(3),
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(9),
  },
  modalCloseButtonText: {
    fontSize: hp(2),
    color: colors.bg,
  },

  navbarContainer: {
    backgroundColor: colors.main,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(10),
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    height: hp(10),
    position: "absolute",
    bottom: 0,
    width: wp(100),
  },
  navbarIcon: {
    fontSize: hp(5),
    color: colors.bg,
  },

  feedbackContainer: {
    position: "absolute",
    top: hp(10),
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
