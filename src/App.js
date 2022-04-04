import React from 'react'
import './App.css';
import CounterTwo from './components/CounterTwo';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// export const HomeContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value="Nabendu">
        <ChannelContext.Provider value="TWD">
          <HomeContext.Provider value="Home">
            <GrandParent />
          </HomeContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CounterTwo />
    </div>
  );
}

export default App;
