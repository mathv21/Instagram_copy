//Importando as Dependencia
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';
import React from 'react';

//Importando as duas Rotas
import Feed from './pages/Feed';
import New from './pages/New';

//Importando Images de Icones
import logo from './assets/logo.png';

//Fazendo o Export para modificação
export default createAppContainer(
    createStackNavigator({
         Feed,
         New,
    },{
        //initialRouteName:'New',
        defaultNavigationOptions:{
            headerTintColor: '#000',
            headerTitle: ()=> <Image style={{marginHorizontal: 20}} source={logo} />,
            headerBackTitle: () => null,

        },
        mode: 'modal'
    })
);