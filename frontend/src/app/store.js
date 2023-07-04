import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ueberMichReducer from '../features/ueberMich/ueberMichSlice';
import berufsstationenReducer from '../features/berufsstationen/berufsstationenSlice';
import sprachenReducer from '../features/sprachen/sprachenSlice';
import referenzenReducer from '../features/referenzen/referenzenSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    ueberMich:ueberMichReducer,
    berufsstationen: berufsstationenReducer,
    sprachen:sprachenReducer,
    referenzen:referenzenReducer,
  },
});
