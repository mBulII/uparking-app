import { StyleSheet } from "react-native";
import { hp } from "../constants/device";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  //main container
  container: {
    flex: 1,
    paddingTop: hp(5),
    backgroundColor: colors.main,
  },
});
