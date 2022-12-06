import { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../constants/styles";
import { AuthContext } from "../store/auth-context";
import { AnswersContext } from "../store/answers-context";

const CustomDrawer = (props) => {
  const authCtx = useContext(AuthContext);
  const answersCtx = useContext(AnswersContext);

  function logoutHandler() {
    answersCtx.resetAnswers();
    authCtx.logout();
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Ionicons name="person" size={22} color={Colors.textPrimary} />
            <Text
              style={{
                color: Colors.textPrimary,
                fontSize: 16,
                marginLeft: 25,
                fontFamily: "IBMPlexSans_500Medium",
              }}
            >
              {authCtx.userName}
            </Text>
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../assets/images/foot.png")}
              style={{
                height: 80,
                width: 80,

                marginBottom: 10,
              }}
            />
          </View>
        </View>
        <DrawerItemList {...props} />
        <View style={{ alignItems: "center", marginTop: "25%" }}>
          <Image
            source={require("../assets/images/earth.png")}
            style={{
              height: 200,
              width: 200,
              marginBottom: 10,
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={logoutHandler}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color={Colors.red} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "IBMPlexSans_400Regular",
                marginLeft: 25,
              }}
            >
              Deconectează-te
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
