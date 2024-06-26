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
    marginVertical: hp(4),
  },

  input: {
    width: wp(93),
    height: hp(15),
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    textAlignVertical: "top",
    marginTop: hp(5),
    borderRadius: hp(2),
  },
  errorText: {
    fontSize: hp(1.5),
    color: colors.red,
    marginLeft: wp(4),
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
    marginTop: hp(28),
    borderRadius: hp(4),
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
    borderRadius: hp(4),
    justifyContent: "center",
    alignItems: "center",
  },
  button2Text: {
    fontSize: hp(3),
    color: colors.bg,
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
