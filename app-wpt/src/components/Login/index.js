import React from 'react';

import { Button } from '@wpd/base';

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
                <Button
                    wechat-open-type={isLogin ? '' : 'getUserInfo'}
                    wechat-bindgetuserinfo={isLogin ? '' : (e) => this.getUserInfo(e)}
                >
                    {this.props.children}
                </Button>
            </>
        );
    }
}
