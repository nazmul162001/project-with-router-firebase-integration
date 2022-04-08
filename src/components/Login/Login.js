import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  // custom hooks / destructuring
  const {singInWithGoogle} = useFirebase();
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
        <button onClick={singInWithGoogle} >Or sign In with google</button>
      </div>
    </div>
  );
};

export default Login;
