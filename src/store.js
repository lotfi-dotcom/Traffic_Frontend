// store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api'; // Import your API from the api file
import rootReducer from './tableSlice'; // Passe den Pfad an deine Root-Reducer-Datei an
import { combineReducers } from 'redux'; // Importiere combineReducers aus 'redux'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Füge andere Reducer hinzu, wenn benötigt
    table: rootReducer, // Passe dies entsprechend an
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
