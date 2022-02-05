import * as React from 'react'
import { Text,View, StyleSheet, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View>
                        <View>
                            <Image
                                source={require('../assets/profile_img.png')}
                                style={styles.postImage}
                            ></Image>
                        </View>
                        <View>
                            <Text style={styles.postAuthorText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/post.jpeg')} />
                    <View>
                        <Text style={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
                            <Text style={styles.likeText}>15k</Text>
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
    postImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    postAuthorText: {
      fontSize: RFValue(18),
      color: "white"
    },
    captionText: {
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
  