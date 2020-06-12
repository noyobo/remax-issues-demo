import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import ScrollA from '@components/ScrollA';
// import ScrollB from '../../ScrollB';

class Home extends React.Component {
  render() {
    return (
      <View className={styles.app}>
        <ScrollA></ScrollA>
        {/* <ScrollB></ScrollB> */}
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
        <View style={{ height: 100 }}>页面滚动</View>
      </View>
    );
  }
}
export default Home;
