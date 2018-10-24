import React from 'react';
import HelloFriend from '../components/HelloFriend';
import fetch from 'isomorphic-fetch'
import MainContainer from './main/MianContainer'

class Page extends React.Component {
  static async getInitialProps() {
    return {
      name: 'value',
    };
  }

  constructor(props){
    super(props)
    this.state={
      name:'aa'
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default Page;
