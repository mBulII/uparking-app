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

  labelText: {
    fontSize: hp(2),
    marginTop: hp(4),
    marginBottom: hp(1),
    marginLeft: wp(5),
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    height: hp(5),
    paddingLeft: wp(2),
    color: colors.text,
    borderColor: colors.grey,
    borderRadius: 20,
    width: wp(93),
    alignSelf: "center",
  },

  buttonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: wp(5),
  },
  button: {
    width: wp(25),
    height: hp(12),
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: wp(5),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(4),
  },
  buttonIcon: {
    fontSize: hp(4),
    color: colors.main,
    marginBottom: hp(1),
  },
  buttonText: {
    fontSize: hp(1.5),
    color: colors.text,
    textAlign: "center",
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
    marginTop: hp(2),
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
    marginBottom: hp(5),
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

  bottomButtonContainer: {
    height: hp(16),
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
  button1: {
    width: wp(80),
    height: hp(6),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  button1Text: {
    fontSize: hp(3),
    color: colors.main,
  },
  button2: {
    width: wp(80),
    height: hp(6),
    borderRadius: 20,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(3),
  },
  button2Text: {
    fontSize: hp(3),
    color: colors.bg,
  },
});
