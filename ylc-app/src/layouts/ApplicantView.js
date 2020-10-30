import { Layout } from 'antd'
import AppHeader from '../components/AppHeader'
import NonprofitTable from '../components/NonprofitTable';
import '../App.css';

const { Content } = Layout

function ApplicantView() {
    return (
        <div>
            <AppHeader />
            <Content
                className='site-layout'
                style={{ padding: '0 4rem', marginTop: '4rem' }}>
                <div className='site-layout-background' style={{ padding: '2rem', minHeight: '100vh' }}>
                    <h1>Nonprofit Database</h1>
                    <p>
                        Welcome to our Nonprofit Database. Here you'll find a list of all the organizations 
                        we partner with. When you find the organization you'd like to serve with, click "Select" 
                        and provide your information. We'll follow up with additional instructions. 
                    </p>
                    <NonprofitTable />
                </div>
            </Content>
        </div>
    );
}

export default ApplicantView;