import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../App.css';

const { Header } = Layout

function AppHeader() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo-container">
                <p>Young Leaders Council</p>
            </div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <Link to='/'>
                        Non-Profit Database
                    </Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to='/admin'>
                        Admin Dashboard
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default AppHeader;