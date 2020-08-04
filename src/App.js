import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './routes/home/Home';
import UserLoginPage from './routes/userLoginPage/UserLoginPage';
import CharacterCreatePage from './routes/characterCreatePage/CharacterCreatepage';
import CharacterDisplayPage from './routes/characterDisplayPage/CharacterDisplayPage'
import PublicRoute from './components/utility/PublicRoute'
import PrivateRoute from './components/utility/PrivateRoute'
import UserPage from './routes/userPage/UserPage'

class App extends Component {

  state = { hasError : null }

    static getDerivedStateFrom(error){
      console.error(error)
      return { hasError : true }
    }

  render(){
        return (
          <div className='App_Wrap'>
            <header className='app_header'>
              <Header/>
            </header>
            <main className='Main_App'>
              {this.state.hasError && <p className='error'> There is an Error, try again later?</p>}
              <Switch>
                <Route
                exact
                path={'/'}
                component={Home}
                />
                <PublicRoute
                exact
                path={'/login'}
                component={UserLoginPage}
                />
                <PublicRoute
                exact
                path={'/sighUpForm'}
                component
                />
                <Route
                path={'/character/:char_id'}
                component={CharacterDisplayPage}
                />
                <PrivateRoute
                exact
                path={'/char-Create'}
                component={CharacterCreatePage}
                />
                <PrivateRoute
                path={`/user/:user_id`}
                component={UserPage}/>
              </Switch>
            </main>       
          </div>
  );
  }

    
  
  
}

export default App;
