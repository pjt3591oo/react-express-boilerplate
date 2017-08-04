/**
 * Created by bagjeongtae on 2017. 8. 2..
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import router1 from './pages/Router1'
import router2 from './pages/Router2'
import router3 from './pages/Router3'
import Home from './pages/Home'



class Main extends React.Component {
    render(){
        return (
          <div id="main">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/router1' component={router1}/>
              <Route path='/router2' component={router2}/>
              <Route path='/router3' component={router3}/>
            </Switch>
          </div>
        );
    }
}

export default Main
