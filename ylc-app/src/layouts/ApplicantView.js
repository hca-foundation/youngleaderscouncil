import { Layout } from 'antd'
import AppHeader from '../components/AppHeader'
import NonProfitRow from '../components/NonProfitRow'
import '../App.css';

const { Content } = Layout

const staticNonProfits = [
    {
        name: 'ABLE Youth',
        description: 'To reach and teach all children in wheelchairs the importance of complete independence.',
        impactArea: 'Youth Development',
        website: 'http://www.ableyouth.org',
    },
    {
        name: 'Bridges for the Deaf and Hard of Hearing',
        description: 'To serve an empowered and united community in which the Deaf, deaf, hard of hearing, and hearing equally participate and are equally valued.',
        impactArea: 'Youth Development',
        website: 'http://www.bridgesfordeafandhh.org',
    },
]

function ApplicantView() {
    return (
        <div>
            <AppHeader />
            <Content
                className='site-layout'
                style={{ padding: '0 4rem', marginTop: '4rem' }}>
                <div className='site-layout-background' style={{ padding: '2rem', minHeight: '100vh' }}>
                    <h1>Non-Profit Database</h1>
                    <p>
                        Welcome to our Non-Profit Database. Here you'll find a list of all the non-profits 
                        that we partner with. If you're interested in serving on the board, click the "Connect" 
                        button and provide your information.
                    </p>
                    <h3>Non-Profits [{staticNonProfits.length}]</h3>
                    {/* TODO: most likely switch to data tables lib instead of mapped div */}
                    {staticNonProfits.map((nonProfit, i) => <NonProfitRow key={i} info={nonProfit} />)}
                </div>
            </Content>
        </div>
    );
}

export default ApplicantView;