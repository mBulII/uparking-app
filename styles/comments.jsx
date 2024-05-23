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

  bodyContainer: {
    flex: 1,
    backgroundColor: colors.bg,
    width: wp(100),
  },

  textTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: colors.text,
    marginLeft: wp(3),
    marginTop: hp(5),
  },
  textSubheading: {
    fontSize: hp(2),
    color: colors.text,
    marginHorizontal: wp(3),
    textAlign: "justify",
  },

  input: {
    width: wp(93),
    height: hp(15),
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    textAlignVertical: "top",
    marginTop: hp(2),
    borderRadius: 22,
  },

  imageButton: {
    width: wp(50),
    height: hp(13),
    flexDirection: "column",
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(8),
    borderRadius: 15,
  },
  imageIcon: {
    fontSize: hp(3),
    color: colors.grey,
    marginBottom: wp(2),
  },
  imageText: {
    fontSize: hp(2),
    color: colors.grey,
  },

  oText: {
    fontSize: hp(2),
    color: colors.text,
    marginVertical: hp(2),
    alignSelf: "center",
  },

  cameraButton: {
    width: wp(60),
    height: hp(5),
    backgroundColor: colors.main,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  cameraIcon: {
    fontSize: hp(2),
    color: colors.bg,
  },
  cameraText: {
    fontSize: hp(2),
    color: colors.bg,
    marginLeft: wp(12),
  },

  button1: {
    width: wp(80),
    height: hp(7),
    borderWidth: 1,
    borderColor: colors.main,
    alignSelf: "center",
    marginTop: hp(8),
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button1Text: {
    fontSize: hp(3),
    color: colors.main,
  },

  button2: {
    width: wp(80),
    height: hp(7),
    backgroundColor: colors.main,
    alignSelf: "center",
    marginTop: hp(3),
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button2Text: {
    fontSize: hp(3),
    color: colors.bg,
  },
});
