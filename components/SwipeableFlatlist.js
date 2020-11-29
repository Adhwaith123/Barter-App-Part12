import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import db from '../config';

export default class SwipeableFlatlist extends Component{
    constructor(props) {
       super(props);
       this.state = {
         allNotifications : this.props.allNotifications,
       };
     }

     onSwipeValueChange=(swipeData)=>{
         var allNotifications=this.state.allNotifications
         const {key,value}=swipeData
         if(value<Dimensions.get("window").width){
             const newData=[...allNotifications]
             const previousIndex=allNotifications.findIndex(item=>{
                 item.key===key
             })
             this.updateMarkAsRead(allNotifications[previousIndex])
             newData.splice(previousIndex,1)
             this.setState({
                 allNotifications:newData
             })

             
         }

     }
     updateMarkAsRead=()=>{
         db.collection("all_notifications").doc(notification.doc_id).update({
             "notification_status":"read"
         })
     }
renderItem=(data)=>{
<ListItem 
       leftElement={<Icon name ="book" type="font-awesome" color="blue" />}
       title={data.item.book_name}
       titleStyle={{color:"black",
         fontWeight:"bold"}}
         subtitle={data.item.message}
         bottomDivider/>
}

render(){
    return(
        <View>

        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
