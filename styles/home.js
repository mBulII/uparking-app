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

  requestModalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
  requestModalContainer: {
    backgroundColor: colors.bg,
    padding: hp(2),
    height: hp(50),
    width: wp(80),
    borderRadius: hp(4),
    alignItems: "center",
  },
  requestModalIcon: {
    fontSize: hp(10),
    color: colors.main,
    marginTop: hp(3),
    marginBottom: hp(5),
  },
  requestModalTitle: {
    fontSize: hp(3),
    color: colors.text,
    marginBottom: hp(1),
  },
  requestModalTitle2: {
    fontSize: hp(2),
    color: colors.text,
    marginBottom: hp(10),
    textAlign: "center",
  },
  requestModalButtonContainer: {
    flexDirection: "row",
  },
  requestModalButton: {
    width: wp(30),
    height: hp(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.main,
    borderRadius: hp(3),
    marginRight: wp(5),
  },
  requestModalButtonText: {
    fontSize: hp(2),
    color: colors.bg,
  },
  requestModalButton2: {
    width: wp(30),
    height: hp(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg,
    borderRadius: hp(3),
    borderWidth: 1,
    borderColor: colors.main,
    marginLeft: wp(5),
  },
  requestModalButtonText2: {
    fontSize: hp(2),
    color: colors.main,
  },

  selectSedeModalContainer: {
    backgroundColor: colors.bg,
    padding: hp(2),
    height: hp(50),
    width: wp(80),
    borderRadius: hp(4),
    alignItems: "center",
  },
  selectSedeModalTitle: {
    textAlign: "center",
    fontSize: hp(4),
    color: colors.text,
  },
  selectSedeModalSedeButton: {
    width: wp(40),
    height: hp(5),
    marginTop: hp(2),
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: hp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  selectSedeModalSedeButtonSelected: {
    width: wp(40),
    height: hp(5),
    marginTop: hp(2),
    backgroundColor: colors.main,
    borderRadius: hp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  selectSedeModalSedeButtonText: {
    fontSize: hp(2),
    color: colors.main,
  },
  selectSedeModalSedeButtonTextSelected: {
    fontSize: hp(2),
    color: colors.bg,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  openParkingLotContainer: {
    width: wp(20),
    height: hp(21),
    position: "absolute",
    right: wp(2),
    bottom: hp(15),
  },
  openParkingLotRed: {
    width: wp(10),
    height: hp(5),
    backgroundColor: colors.red,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
    borderRadius: hp(2),
  },
  openParkingLotYellow: {
    width: wp(10),
    height: hp(5),
    backgroundColor: colors.yellow,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
    borderRadius: hp(2),
  },
  openParkingLotGreen: {
    width: wp(10),
    height: hp(5),
    backgroundColor: colors.green,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
    borderRadius: hp(2),
  },
  openParkingLotText: {
    fontSize: hp(1.3),
    color: colors.bg,
  },

  selectSedeButton: {
    position: "absolute",
    right: wp(2),
    bottom: hp(11),
    width: wp(20),
    height: hp(3),
    borderRadius: hp(3),
    borderWidth: 1,
    borderColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
  selectSedeButtonText: {
    fontSize: hp(2),
    color: colors.main,
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
  modalCapacityMessageRed: {
    fontSize: hp(4),
    color: colors.red,
    marginTop: hp(8),
    textAlign: "center",
  },
  modalCapacityMessageYellow: {
    fontSize: hp(4),
    color: colors.yellow,
    marginTop: hp(8),
    textAlign: "center",
  },
  modalCapacityMessageGreen: {
    fontSize: hp(4),
    color: colors.green,
    marginTop: hp(8),
    textAlign: "center",
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
