import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './routes/home/Home';



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
              </Switch>
            </main>       
          </div>
  );
  }

    
  
  
}

export default App;
