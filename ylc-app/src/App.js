import { Layout } from 'antd'
import ApplicantView from './layouts/ApplicantView'
import AdminView from './layouts/AdminView'
import { Route, Switch } from 'react-router-dom'
import './App.css';

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' component={ApplicantView} exact />
          <Route path='/admin' component={AdminView} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;