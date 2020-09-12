import {
  createAction,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  token: string;
  isAuth: boolean;
}

interface LoginPayload extends Partial<LoginState> {}

const login = createAction('auth/login');

const initialState: LoginState = {
  username: '',
  password: '',
  token: '',
  isAuth: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state: LoginState, action: PayloadAction<LoginState>) => ({
      ...state,
      ...action.payload,
    }),
    loginError: (state) => state,
  },
});

const {name, actions, reducer} = slice;

const loginUser = createAsyncThunk(
  login.type,
  async (payload: LoginPayload, thunksapi) => {
    //Server API call
    setTimeout(() => {
      console.log(payload);
      thunksapi.dispatch(
        actions.loginSuccess({
          username: 'UsernameFromPayload',
          password: 'PasswordFromPayload',
          token: 'TokenFromServer',
          isAuth: true, //user is authenticated
        }),
      );
    }, 3000);
  },
);

export {name, actions, reducer, loginUser};
