import { Layout } from 'antd'
import AppHeader from './components/AppHeader'
import ApplicantView from './layouts/ApplicantView'
import './App.css';

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <AppHeader />
        {/* TODO: Views need auth and routing */}
        <ApplicantView />
      </Layout>
    </div>
  );
}

export default App;