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