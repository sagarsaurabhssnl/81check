import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            liked: false
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
            return (
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <Image
                            source={require("../assets/story_image_4.png")}
                            style={[styles.storyImage]}
                        ></Image>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.liked) {
                                    this.setState({
                                        liked: false
                                    })
                                } else {
                                    this.setState({
                                        liked: true
                                    })
                                }
                            }}
                            style={{ padding: 5, alignSelf: "flex-end", position: "absolute", transform: [{ translateX: RFValue(-25) }, { translateY: RFValue(50) }], elevation: 2 }}>
                            <Ionicons name={"heart"} size={RFValue(40)} color={this.state.liked ? ("#f00") : ("#ffc")} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.storyTitleText}>
                                {this.props.story.title}
                            </Text>
                            <Text style={styles.descriptionText}>
                                {this.props.story.description}
                            </Text>
                            <Text style={[styles.storyAuthorText, { alignSelf: "flex-end" }]}>
                                -  {this.props.story.author}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#ffffff77",
        borderRadius: 20,
        padding: 10
    },
    storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250),
        borderRadius: 20
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    storyTitleText: {
        fontSize: RFValue(25),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    storyAuthorText: {
        fontSize: RFValue(18),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});
