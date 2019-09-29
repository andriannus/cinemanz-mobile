import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AboutScreen from '~app/src/screens/about';
import ComingSoonScreen from '~app/src/screens/coming-soon';
import HomeScreen from '~app/src/screens/home';
import NowPlayingScreen from '~app/src/screens/now-playing';

const MainNavigator = createBottomTabNavigator(
  {
    home: {screen: HomeScreen, path: '/'},
    nowPlaying: {screen: NowPlayingScreen, path: '/now-playing'},
    comingSoon: {screen: ComingSoonScreen, path: '/coming-soon'},
    about: {screen: AboutScreen, path: '/about'},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon
          navigation={navigation}
          focused={focused}
          tinColor={tintColor}
        />
      ),
    }),
    tabBarOptions: {
      activeTintColor: '#263238',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

const TabBarIcon = ({navigation, focused, tinColor}) => {
  const {routeName} = navigation.state;
  let iconName;

  switch (routeName) {
    case 'home': {
      iconName = `home${focused ? '' : '-outline'}`;
      break;
    }

    case 'nowPlaying': {
      iconName = `play-circle${focused ? '' : '-outline'}`;
      break;
    }

    case 'comingSoon': {
      iconName = `video${focused ? '' : '-outline'}`;
      break;
    }

    case 'about': {
      iconName = `information${focused ? '' : '-outline'}`;
      break;
    }
  }

  return <Icon name={iconName} size={25} color={tinColor} />;
};

export default createAppContainer(MainNavigator);
