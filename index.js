import {AppRegistry} from 'react-native';
import Main from './src/Main';
import {name as appName} from './app.json';
import './i18n';

AppRegistry.registerComponent(appName, () => Main);
