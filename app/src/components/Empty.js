import React from 'react';

import { Button } from '@remax/one';

export default class Login extends React.Component {
  state = {
    isLogin: false,
  };

  componentDidMount() {
    this.setState({
      isLogin: true,
    });
  }

  render() {
    const { isLogin } = this.state;

    if (isLogin) return null;
    return (
      <>
        <Button>2222</Button>
      </>
    );
  }
}
