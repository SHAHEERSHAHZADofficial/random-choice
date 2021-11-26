// import React, { useState } from 'react';
// import { Button, View, Text, TextInput, StyleSheet,Share,Alert  } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ShareExample = () => {
//     const onShare = async () => {
//       try {
//         const result = await Share.share({
          
//           message: `Your Selected Dish is Chicken`,
//         });
//         if (result.action === Share.sharedAction) {
//           if (result.activityType) {
//             // shared with activity type of result.activityType
//           } else {
//             // shared
//           }
//         } else if (result.action === Share.dismissedAction) {
//           // dismissed
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     };
//     return (
//       <View style={{ marginTop: -1 }}>
//         {/* <Button onPress={onShare}> */}
//   <TouchableOpacity style={{ marginTop:-50 }} onPress={onShare}>
//         <Icon  name="share-social-outline" style={{fontSize:50,color:'black',paddingLeft:200,paddingTop:50}}/>
//     </TouchableOpacity>
//         {/* </Button> */}
//       </View>
//     );
//   };


//   export default ShareExample