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

  parkingLot: {
    width: wp(20),
    height: hp(5),
    backgroundColor: colors.red,
  },
  modalContent: {
    width: wp(90),
    height: hp(40),
    backgroundColor: colors.bg,
    borderRadius: 15,
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    right: wp(3),
    top: hp(1),
    color: colors.main,
    fontSize: hp(4),
  },
  alertIcon: {
    position: "absolute",
    right: wp(5),
    top: hp(6),
    fontSize: hp(7),
  },
  modalHeader: {
    flexDirection: "row",
    marginLeft: wp(5),
    marginTop: hp(5),
    height: hp(10),
  },
  modalTextTitle1: {
    fontSize: hp(3.6),
    color: colors.text,
  },
  modalTextTitle2: {
    fontSize: hp(3.6),
    color: colors.accent,
  },
  modalText: {
    marginBottom: hp(3),
    color: colors.text,
    fontSize: hp(2),
    marginLeft: wp(5),
  },
  modalMessage: {
    marginTop: hp(3),
    color: colors.accent,
    fontSize: hp(3.6),
    alignSelf: "center",
  },

  navbarContainer: {
    backgroundColor: colors.main,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(10),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: hp(10),
  },
  navbarIcon: {
    fontSize: hp(5),
    color: colors.bg,
  },
});
