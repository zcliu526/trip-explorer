import React from "react";
import styles from './Header.module.css'
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
    return (
        <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>Travel. Explore. Live.</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>Chinese</Menu.Item>
                  <Menu.Item>English</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              Language
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button>Sign Up</Button>
              <Button>Log In</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>Trip Explorer</Typography.Title>
          <Input.Search className={styles["search-input"]}
            placeholder={'Search destinations'}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles['main-menu']}>
          <Menu.Item key={1}>Home</Menu.Item>
          <Menu.Item key={2}>Explore</Menu.Item>
          <Menu.Item key={3}>Deals</Menu.Item>
          <Menu.Item key={4}>Packages</Menu.Item>
          <Menu.Item key={5}>Group</Menu.Item>
          <Menu.Item key={6}>Activities</Menu.Item>
          <Menu.Item key={7}>Tours</Menu.Item>
          <Menu.Item key={8}>Reviews</Menu.Item>
          <Menu.Item key={9}>Flights</Menu.Item>
          <Menu.Item key={10}>Hotels</Menu.Item>
          <Menu.Item key={11}>Cruises</Menu.Item>
          <Menu.Item key={12}>Car Rentals</Menu.Item>
          <Menu.Item key={13}>Adventure</Menu.Item>
          <Menu.Item key={14}>FAQ</Menu.Item>
          {/* <Menu.Item key={15}>About</Menu.Item>
          <Menu.Item key={16}>Contact</Menu.Item> */}
        </Menu>
      </div>)
}