import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full p-5`}>
            <View>
                <Image 
                style={{
                    width: 100, height:100, resizeMode: 'contain',
                }}
                source={{
                    uri:"https://links.papareact.com/gzs",
                }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                            textInput: {
                                fontSize: 18,
                            },
                    }}
                    fetchDetails={true}
                    minLength={2}
                    enablePoweredByContainer={false}
                    returnKeyType={"search"}
                    onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                        dispatch(setDestination(null));
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY, //rm -rf node_modules/.cace/babel-loader/* to reload the env vars
                        language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
                <NavFavorites />
            </View>

        </SafeAreaView>
    );
};

export default HomeScreen;
