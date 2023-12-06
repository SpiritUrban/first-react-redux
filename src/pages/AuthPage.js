import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/authActions';
// import { log } from '../lib/utils';

const initialState = {
    email: '',
    password: ''
};

function reducer(state, action) {
    return {
        ...state,
        [action.field]: action.value
    };
}

function AuthPage() {

    const [state, dispatchState] = useReducer(reducer, initialState);
    const { email, password } = state;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatchState({ field: e.target.name, value: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // log(email, password);
        dispatch(loginAction(email, password));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AuthPage;
