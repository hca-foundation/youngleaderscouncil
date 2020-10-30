import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd';

const Nav = (props) => {
    const history = useHistory()
    const { Sider } = Layout;

    const styles = {
        nav: {
            // marginTop: '40px',
            height: '100%'
        },
        menuItem: {
            paddingTop: '10px',
            backgroundColor: '#696969',
            color: '#ffffff'
        },
        title: {
            fontWeight: '900',
            fontSize: '1.25em',
            paddingBotton: '10px'
        },
        navItem: {
            paddingTop: '-20px',
            fontWeight: '600',
            fontSize: '1.2em',
        }
    }

    return (
        <div style={styles.nav} >
            <Sider
                style={{
                    height: '1800px',
                    float: 'left',
                    left: 0,
                    backgroundColor: '#696969'
                }}
                trigger={null}
            >
                <Menu style={styles.menuItem} theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" style={styles.title}>
                        YLC Matching
                </Menu.Item>
                    <Menu.Item key="2" onClick={() => history.push('/login')} style={styles.navItem}>
                        Admin
                </Menu.Item>
                    <Menu.Item key="3" onClick={() => history.push('/')} style={styles.navItem}>
                        Student
                </Menu.Item>
                </Menu>
            </Sider>
        </div>
    );
}


export default Nav