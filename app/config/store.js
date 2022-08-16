import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer';
const store = createStore(reducer);
export default store;