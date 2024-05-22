import { StyleSheet } from "react-native";
import { hp, wp } from "../constants/device";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  headerContainer: {
    backgroundColor: colors.main,
    width: wp(100),
    height: hp(13),
    justifyContent: "flex-end",
  },
  headerLogo: {
    height: hp(8),
    width: wp(50),
    marginLeft: wp(3),
  },

  content: {
    flex: 1,
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
