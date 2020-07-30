import React from 'react';

class App extends React.Component() {
  state = { hasError : null }

    static getDerivedStateFrom(error){
      console.error(error)
      return { hasError : true }
    }

  render(){
        return (
          <main className='App'>
            {}
          </main>
  );
  }

    
  
  
}

export default App;
