import * as React from 'react'
import { Text,View, StyleSheet, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <View>
                        <View>
                            <Image
                                source={require('../assets/profile_img.png')}
                            ></Image>
                        </View>
                        <View>
                            <Text>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/post.jpeg')} />
                    <View>
                        <Text>{this.props.post.caption}</Text>
                    </View>
                    <View>
                        <View>
                            <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
                            <Text>15k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: RFValue(25),
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      color: "white"
    },
    descriptionText: {
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
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
  