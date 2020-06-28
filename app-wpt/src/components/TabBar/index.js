import React from 'react';

import XcxTab from './xcxTab';

function TabBar({ current, ...restProps }) {
    return <XcxTab {...restProps} />;
}

export default React.memo(TabBar);
