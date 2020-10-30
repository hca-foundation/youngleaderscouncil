import { Layout } from 'antd'
import AppHeader from '../components/AppHeader'
import '../App.css';

const { Content } = Layout

function AdminView() {
    return (
        <div>
            <AppHeader />
            <Content
                className='site-layout'
                style={{ padding: '0 4rem', marginTop: '4rem' }}>
                <div className='site-layout-background' style={{ padding: '2rem', minHeight: '100vh' }}>
                    <h1>Testing - Admin View</h1>
                </div>
            </Content>
        </div>
    );
}

export default AdminView;