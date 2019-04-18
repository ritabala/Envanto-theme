import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Signin from './containers/Auth/Signin';
import Signup from './containers/Auth/Signup';
import Dashboard from './containers/Dashboard/Dashboard';
import * as actionCreators from './store/actions/index';

import {connect} from 'react-redux';

import Aux from './hoc/Auxiliary';
import Layout from './hoc/Layout';
import Licenses from './containers/Licenses/Licenses';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render() {
    console.log(this.props.isAuth)
    let routes = (
      <Switch>
        <Route path='/' exact component={Signin} />
        <Route path='/register' component={Signup} />
        {/* <Route path='/forgot-password' /> */}
        <Redirect to='/' />
      </Switch>
    )
    if(this.props.isAuth){
      routes=(
        <Layout>
          <Switch>
            <Route path='/dashboard'  component={Dashboard} />
            <Route path='/licenses' component={Licenses}/>
            <Redirect to='/dashboard' />
          </Switch>
       </Layout>
      )
    }
    console.log(routes)
    return (
      <Aux>
            {routes}
      </Aux>
    );
  }
}
const mapStateToProps=state=>{
  return({
      isAuth : state.isAuth
  })
}
const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp : ()=>dispatch(actionCreators.autoSignupOnRefresh())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
