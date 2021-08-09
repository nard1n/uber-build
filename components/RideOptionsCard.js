import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const RideOptionsCard = () => {
    const navigation = useNavigation();

    const data = [
        {
          id: "Uber-X-123",
          title: "UberX",
          multiplier: 1,
          image: "https://links.papareact.com/3pn",
        },
        {
          id: "Uber-XL-456",
          title: "Uber XL",
          multiplier: 1.2,
          image: "https://links.papareact.com/5w8",
        },
        {
          id: "Uber-LUX-789",
          title: "Uber LUX",
          multiplier: 1.75,
          image: "https://links.papareact.com/7pf",
        },
      ];

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard") }
                    style={tw`absolute top-3 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="font-awesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem = {({item}) => (
                    <TouchableOpacity>
                        <Text>
                            Car
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

