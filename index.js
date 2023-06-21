/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';

import { name as appName } from './app.json';
import { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'Login' });
        }, 3000);
    }
    render() {
        const { currentScreen } = this.state;
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
        return mainScreen;
    }
}

AppRegistry.registerComponent(appName, () => Main);
