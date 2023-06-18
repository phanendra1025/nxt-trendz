import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import './App.css'
import Home from './components/Home'

const App = () => {
  console.log('app')

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
