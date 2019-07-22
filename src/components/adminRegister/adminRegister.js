import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import { Input, Button } from 'reactstrap';
import Button from '@material-ui/core/Button';
import './adminRegister.css';

class adminRegister extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            redirect: false
        }
    } 

    render() { 
        return (
            //need to change login container
            <div className='login-container'>
                <div className='login'>
                    <span id='register-dev'>DEV</span> <span id='register-links'>LINKS</span>
                    {/* <h3>Username</h3>
                    <Input type='text'
                    name='username' type='text' value={this.state.email} onChange={this.handleChange}
                    />
                    <h3>Eamil</h3>
                    <Input type='text'
                    name='email' type='email' value={this.state.email} onChange={this.handleChange}
                    />
                    <h3>Password</h3>
                    <Input type='password'
                    name='password' type='password' value={this.state.password} onChange={this.handleChange}
                    /> */}
                



                <form action="">
                        <div id="email-input-field-reg">
                            <input type='text'
                            name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                            <label for="name">Email:</label>
                        </div>
                    </form>

                    <form action="">
                        <div id="username-input-field">
                            <input type='text'
                            name='username' type='text' value={this.state.email} onChange={this.handleChange} required />
                            <label for="name">Username:</label>
                        </div>
                    </form>

                    <form action="">
                        <div id="password-input-field-reg">
                            <input type='password'
                            name='password' type='password' value={this.state.password} onChange={this.handleChange} required />
                            <label for="name">Password:</label>
                        </div>
                    </form>


                <Link to='/'><Button onClick={this.handleClick} id='login-button' variant="contained" color="primary">
                    LOGIN
                    </Button></Link>

                    <Button id='register-button' variant="contained" color="primary">
                    REGISTER
                    </Button>
               {/* add register */}
                    {/* <Button >Register</Button> */}
{/*             

                <Link to='/'>
                    <Button >Login</Button>
                    </Link> */}
                {/* <div className="altSignIn">
                GITHUB
                <img className='github' src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' />

                
                <img className='google' src='https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/google-plus-256.png' />
                </div> */}
                </div>
                </div>
        )
    }
}

export default adminRegister;