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
import { useState } from "react";
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";
import 'intl';
import 'intl/locale-data/jsonp/en'; 

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const SURGE_CHARGE_RATE = 1.5; //if there is a surge charge
    
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
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem = {({item: {id, title, multiplier, image}, item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image}}
                        />
                        <View style={tw`-ml-5`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-lg`}>
                            {new Intl.NumberFormat('en-us', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(
                                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier / 100)
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`} >
                <TouchableOpacity disable={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

