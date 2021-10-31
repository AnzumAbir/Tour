

import useAuth from '../../../Hooks/useAuth';

const Login = () => {


    const { signInUsingGoogle } = useAuth();

    return (

        <div>

            <div className="mt-5">
                <h2>Please Sign In</h2>

                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;