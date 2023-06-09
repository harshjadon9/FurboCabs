// import { Center } from 'native-base'
import { Platform } from "react-native";
export default {
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  mapContainer: {
    width: "100%",
    height: 350,
  },

  menubuttoncontainer: {
    position: "absolute",
    marginTop: 35,
    marginLeft: 16,
  },

  menucontainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },

  messagecontainer: {
    marginTop: 200,
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  txt1: {
    fontSize: 16,
    fontFamily: "proximanova-regular",
  },

  txt2: {
    fontSize: 20,
    fontFamily: "lyftpro-semibold",
  },

  searchcontainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    padding: 10,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: "#A0A0A0",
    borderRadius: 5,
  },
  buttoncontainer: {
    marginTop: 250,
    marginHorizontal: 80,
    justifyContent: "flex-end",
    marginVertical: 20,
    backgroundColor: "#FF9B05",
    borderRadius: 80,
  },

  btntxt: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    paddingVertical: 15,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },

  searchicon: {
    justifyContent: "center",
    marginRight: 10,
  },

  modalheader: {
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 15,
  },

  modalcontainer: {
    flex: 1,
    backgroundColor: "white",
  },

  modelcancel: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 16,
    marginTop: Platform.OS === "ios" ? 36 : 30,
  },

  modalheadertitle: {
    flex: 7,
    alignItems: "flex-start",
    marginTop: Platform.OS === "ios" ? 30 : 22,
  },

  titletxt: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "bold",
  },

  donecontainer: {
    flex: 2,
    alignItems: "flex-end",
    marginRight: 16,
    marginTop: Platform.OS === "ios" ? 36 : 28,
  },

  donetxt: {
    fontSize: 15,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "bold",
    color: "#A0A0A0",
  },

  searchbox: {
    borderWidth: 0.5,
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: "#A0A0A0",
  },

  modalsearchcontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  position: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },

  startlocation: {
    flex: 8,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#A0A0A0",
    paddingVertical: 10,
  },

  endlocation: {
    flex: 6,
    justifyContent: "center",
    paddingVertical: 10,
  },

  addbutton: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
  },

  positiontxt: {
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
};
