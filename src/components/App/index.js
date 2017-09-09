// src/components/App/index.js
import React, { Component } from 'react';
import Header from '../Header';

import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
    	<div className='wrapper'>
      		<Header />
      		<div className='slider'>
      			<img src='/images/slider.jpg' />
      		</div>
      	</div>
    );
  }
}

export default App;