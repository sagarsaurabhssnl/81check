import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            liked: false,
            previewImage: "image_1",
            dropDownHeight: 40,
            dropOpen: false,
            author: "",
            story: "",

        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading style={{ width: "100%", height: "100%" }} />;
        } else {
            let preview_Images = {
                "image_1": require("../assets/story_image_1.png"),
                "image_2": require("../assets/story_image_2.png"),
                "image_3": require("../assets/story_image_3.png"),
                "image_4": require("../assets/story_image_4.png"),
                "image_5": require("../assets/story_image_5.png"),
            }
            return (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center"
                    }}>
                    <SafeAreaView>
                        <View>
                            <View>
                                <Image source={require("../assets/logo.png")} style={{ width: 60, height: 60, marginLeft: 10, resizeMode: "contain" }} />
                            </View>
                            <View>
                                <Text>ADD STORY</Text>
                            </View>

                        </View>
                        <ScrollView>
                            <View>
                                <View>
                                    <Image source={preview_Images[this.state.previewImage]} style={{ resizeMode: "contain", width: Dimensions.get("window").width - 40, height: 250, borderRadius: 10, marginBottom: 10 }} />
                                </View>
                                <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                                    <DropDownPicker
                                        items={[
                                            { label: "Image 1", value: "image_1" },
                                            { label: "Image 2", value: "image_2" },
                                            { label: "Image 3", value: "image_3" },
                                            { label: "Image 4", value: "image_4" },
                                            { label: "Image 5", value: "image_5" }
                                        ]}
                                        defaultValue={this.state.previewImage}
                                        containerStyle={{
                                            height: 40,
                                            borderRadius: 20,
                                            marginBottom: 10
                                        }}
                                        onOpen={() => {
                                            this.setState({ dropdownHeight: 170 });
                                        }}
                                        onClose={() => {
                                            this.setState({ dropdownHeight: 40 });
                                        }}
                                        style={{ backgroundColor: "transparent" }}
                                        itemStyle={{
                                            justifyContent: "flex-start"
                                        }}
                                        dropDownStyle={{ backgroundColor: "#2f345d" }}
                                        labelStyle={{
                                            color: "white",
                                            fontFamily: "Bubblegum-Sans"
                                        }}
                                        arrowStyle={{
                                            color: "white",
                                            fontFamily: "Bubblegum-Sans"
                                        }}
                                        onChangeItem={item =>
                                            this.setState({
                                                previewImage: item.value
                                            })
                                        }
                                    />
                                </View>
                                <View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            placeholder={"Title"}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            placeholder={"About"}
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={[styles.inputContainer, { height: 100 }]}>
                                        <TextInput
                                            multiline
                                            placeholder={"Story"}
                                            style={[styles.input]}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            placeholder={"Author"}
                                            style={styles.input}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: "100%",
        backgroundColor: "#999",
        textAlign: "center"
    }, inputContainer: {
        width: "100%",
        height: 50,
        borderRadius: 20,
        backgroundColor: "#888",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
})