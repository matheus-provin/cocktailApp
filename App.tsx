import React from 'react';
import RootNavigation from './src/navigation';
import { ConfigTheme } from './src/config';
export default class App extends React.Component {
  
  render() {
    async function init() {
      await ConfigTheme.build('light')
    }
    init()
    return (
      <RootNavigation />
    );
  }
  
}