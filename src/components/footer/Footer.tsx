import React from "react";
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

export const Footer: React.FC = () => {
    return (
        <Layout.Footer>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
                Copyright @ Trip Explorer - Zhicheng
            </Typography.Title>
        </Layout.Footer>
    )
}