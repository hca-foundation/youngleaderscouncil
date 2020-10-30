import { Layout, Menu } from 'antd'
import '../App.css';

const { Header } = Layout

function AppHeader() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo-container">
                <p>Young Leaders Council</p>
            </div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">Non-Profit Database</Menu.Item>
            </Menu>
        </Header>
    );
}

export default AppHeader;