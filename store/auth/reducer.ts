import {
  createReducer,
  createAction,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  token: string;
}

interface LoginPayload extends Partial<LoginState> {}

const login = createAction('auth/login');

const initialState: LoginState = {
  username: '',
  password: '',
  token: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state: LoginState, action: PayloadAction<LoginState>) => ({
      ...state,
      ...action.payload,
    }),
    loginError: (state, action) => state,
  },
});

const {name, actions, reducer} = slice;

const loginUser = createAsyncThunk(
  login.type,
  async (payload: LoginPayload, thunksapi) => {
    setTimeout(() => {
      console.log(payload);
      //fetch
      thunksapi.dispatch(
        actions.loginSuccess({
          username: 'sarasaUsername',
          password: 'sarasaPassword',
          token: 'sarasaToken',
        }),
      );
    }, 3000);
  },
);

export {name, actions, reducer, loginUser};
