import React from 'react';
import img1 from '../../assets/img/bg-dark.jpg';
import Navbar from '../Navbar';

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='login'>
            <div className="imgBx" data-aos="flip-left">
                <img src={img1} alt="" />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <form>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" />
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" />Remember me</label>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Sign in" />
                        </div>
                        <div className="inputBx">
                            <p>Don't have an account?<a href="#">Sign up</a></p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login