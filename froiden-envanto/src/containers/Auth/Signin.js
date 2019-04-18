import React, { Component } from 'react';
import Footer from '../../components/Footer';

import * as actionCreators from '../../store/actions/index';
import {connect} from 'react-redux';

import {NavLink} from 'react-router-dom';

class Login extends Component {
    state={
        email:'',
        password:'',
        username:''
    }
    onChangeHandler = (event,type)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmitHandler = (event)=>{
        // console.log('in submit handler')
        event.preventDefault();
        this.props.onLogin(this.state.username,
                            this.state.email,
                            this.state.password);       
    }

    render() {
        let errmsg = <p style={{color:'red', textAlign:'center'}}>{this.props.error} </p>|| null
        return (
            <div className="gray-bg">
                <div className="loginColumns animated fadeInDown">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-bold">Welcome to Froiden Envanto</h2>
                           <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <p><small>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small></p>
                        </div>
                        <div className="col-md-6">
                            <div className="ibox-content">
                                <form className="m-t" onSubmit={this.onSubmitHandler} >
                                    {errmsg}
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" required="" name='email' value={this.state.email} onChange={(event)=>this.onChangeHandler(event)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" required="" name='password' value={this.state.password} onChange={(event)=>this.onChangeHandler(event)}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                                    <NavLink to="/forgot-password">
                                        <small>Forgot password?</small>
                                    </NavLink>

                                    <p className="text-muted text-center">
                                        <small>Do not have an account?</small>
                                    </p>
                                    <NavLink className="btn btn-sm btn-white btn-block" to='/register'>Create an account</NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return({
        error : state.error,
        isAuth : state.isAuth
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        onLogin : (username,email,password)=>dispatch(actionCreators.auth(username,email,password))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);