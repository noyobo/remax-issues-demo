// Link.js
import React from 'react';
import View from '@remax/one/esm/hostComponents/View';
// import View from '../View';

export default function Link(props) {
  const { to, ...restProps } = props;

  function goto() {
    console.log('goto', props.to);
  }

  return <View {...restProps} onTap={goto} />;
}
