import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import * as actionCreators from '../../store/actions/index';
import {connect} from 'react-redux';

class Signup extends Component {
    state={
        email:'',
        password:'',
        username:''
    }

    onChangeHandler = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();
        this.props.onSignUp(this.state.username,
                            this.state.email,
                            this.state.password);
            }

    render() {
        let errmsg = <p style={{color:'red', textAlign:'center'}}>{this.props.error} </p>|| null

        return (
            <div className="gray-bg">
            <div className="middle-box text-center loginscreen   animated fadeInDown">
            <div>
                <div>
                    <h1 className="logo-name">FE</h1>
                </div>
                <h3>Register to Froiden Envanto</h3>
                <p>Create account to see it in action.</p>
                <form className="m-t" onSubmit={this.onSubmitHandler}>
                    {errmsg}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required="" name='username' value={this.state.username} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="" name='email' value={this.state.email} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="" name='password' value={this.state.password} onChange={(event)=>this.onChangeHandler(event)}/>
                    </div>
                    <div className="form-group">
                            <div className="checkbox i-checks"><label> <input type="checkbox"/><i></i> Agree the terms and policy </label></div>
                    </div>
                    <button type="submit" className="btn btn-primary block full-width m-b">Register</button>
    
                    <p className="text-muted text-center"><small>Already have an account?</small></p>
                    <NavLink className="btn btn-sm btn-white btn-block" to="/login">Login</NavLink>
                </form>
            </div>
            <hr />
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
        onSignUp : (username,email,password)=>dispatch(actionCreators.auth(username,email,password))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);