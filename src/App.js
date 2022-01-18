import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
//import Controller from './components/Controller'
// import Counter from './components/Counter'
// import Fruits from './components/Fruits'
// import Info from './components/Info'
//import Todos from './components/Todos'
import Blog from './components/Blog'





const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Controller />
        <Todos />
       <Counter />
        <Info />
        <Fruits /> */}
        <Blog />
      </div>
    </Provider>
  )
}


export default App;
