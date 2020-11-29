import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ThingsToDonate  from '../screens/ThingsToDonate';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  ItemDonateList : {
    screen :ItemDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'ItemDonateList'
  }
);
