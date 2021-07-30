import React from 'react'
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const data = [
        {
            id: "123",
            title: "Get a ride",
            image: "https://links.papareact.com/3pn",
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "Order food",
            image: "https://links.papareact.com/28w",
            screen: "EatsScreen", //for future build addition
        },
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
