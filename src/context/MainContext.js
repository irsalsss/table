import React, { useState, useEffect, useContext, createContext, useCallback } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { errorNotif, successNotif } from '../utils/Utils';

const MainContext = createContext(null);

export const MainProvider = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onSearch = (e) => {
    console.log(e.target.value)
  }

  const onFilterGender = (e) => {
    console.log(e)
  }

  const onRedirect = useCallback((url = "/") => {
    history.push(url);
  }, [])

  useEffect(() => {

  }, [])
  
  return (
    <MainContext.Provider 
      {...props}
      value={{
        onSearch, onRedirect, onFilterGender,
      }}
    />
  )
}

export const useMainContext = () => useContext(MainContext);