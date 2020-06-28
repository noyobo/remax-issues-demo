import React from 'react';

import TabBar from '../TabBar1/';

export default function BottomBar(props) {
    return (
        <TabBar
            className="tabBar"
            {...props}
            menus={[
                {
                    icon: 'https://cdn.weipaitang.com/static/2020042910f06ca2-88fa-6ca288fa-ff60-6837ca6ecbab-W69H69',
                    selectedIcon:
                        'https://cdn.weipaitang.com/static/2020042961bff549-6150-f5496150-b75e-996420dbf544-W69H69',
                    link: '/cloudWarehouse/welfare',
                    name: '福利',
                },
                {
                    icon: 'https://cdn.weipaitang.com/static/2019111273c73fe2-0ede-3fe20ede-6499-61bc5c0dc33b-W96H96',
                    selectedIcon:
                        'https://cdn.weipaitang.com/static/201911125557591b-b964-591bb964-a977-8aba1705b123-W96H96',
                    link: '/cloudWarehouse/goodStuff',
                    name: '好货',
                },
                {
                    icon: 'https://cdn.weipaitang.com/static/2019082858dc3c5a-6b58-4bbb-9fa0-1987a99327e2-W72H72',
                    selectedIcon:
                        'https://cdn.weipaitang.com/static/2019082896892925-d323-4520-a375-bf3ccee48fb5-W72H72',
                    link: '/miniProgram/cloudWarehouse/warehouse',
                    name: '云仓',
                },
            ]}
        />
    );
}
