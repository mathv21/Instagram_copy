import React from 'react';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Functions are not valid as a React child',
    'Unrecognized WebSocket',
])

import Routes from './routes';

export default function App(){
    return <Routes/>
}