import React from 'react'
import { Provider } from 'react-redux'
import Controller from './components/Controller'
// import Counter from './components/Counter'
// import Fruits from './components/Fruits'
// import Info from './components/Info'
import store from './redux/store'
//import Todos from './components/Todos'




const App = () => {
  return (
    <Provider store={store}>
      <div>

        <Controller />
        {/*<Todos />
       <Counter />
        <Info />
        <Fruits /> */}
      </div>
    </Provider>
  )
}


export default App;
