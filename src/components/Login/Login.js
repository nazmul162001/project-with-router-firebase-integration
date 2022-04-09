import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {

  const [signInWithGoogle, user] = useSignInWithGoogle(auth)

  return (
    <div>
      <h3>Please login</h3>
      <form>
        <input type="email" name="" placeholder="Enter your email" id="email" />
        <br />
        <input
          type="password"
          name=""
          placeholder="Enter your password"
          id="password"
        />
        <br />
        <input type="submit" value="Sign In" />
      </form>
      <div style={{marginTop: '30px'}}>
        <button onClick={() => signInWithGoogle()} >Or sign In with google</button>
      </div>
    </div>
  );
};

export default Login;
