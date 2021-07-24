import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import StoryCard from "./StoryCard"

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temporary.json");

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({
            fontsLoaded: true
        })
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    keyExtractor = (item, index) => {
        return index.toString() + item.toString();
    }

    renderItem = ({ item: story }) => {
        return (<StoryCard story={story} />);
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <AppLoading />
            );
        }
        else {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <SafeAreaView style={{ marginTop: 40 }}>
                        <ScrollView>
                            <View>
                                <Image source={require("../assets/logo.png")} />
                            </View>
                            <View>
                                <Text>Story Telling App</Text>
                            </View>
                        </ScrollView>
                        <View style={{ backgroundColor: "#55c", borderRadius: 10 }}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={stories}
                                renderItem={this.renderItem}
                            >

                            </FlatList>
                        </View>
                    </SafeAreaView>
                </View>
            )
        }
    }
}