import { Layout } from 'antd'
import Nav from './Nav'
import ApplicantView from './layouts/ApplicantView'
import AdminView from './layouts/AdminView'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

const { Content } = Layout

function App() {
  return (
    <Router>
    <Nav/>
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' component={ApplicantView} exact />
          <Route path='/login' component={Login} />
          <Route path='/admin' component={AdminView} />
        </Switch>
      </Layout>
    </div>
    </Router>
  );
}

export default App;