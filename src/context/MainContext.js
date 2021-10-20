import React, { useState, useEffect, useContext, createContext, useCallback } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { getUsers } from '../client/MainApi';
import { errorNotif, successNotif } from '../utils/Utils';

const MainContext = createContext(null);

export const MainProvider = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterGender, setFilterGender] = useState('all');
  const [currentPage, setCurentPage] = useState(1);

  const onSearch = (e) => {
    setSearchKeyword(e.target.value);
  }

  const onFilterGender = useCallback((gender) => {
    setFilterGender(gender);
  }, [])

  const onResetFilter = useCallback(() => {
    setSearchKeyword('')
    setFilterGender('all')
  }, [])

  const onRedirect = useCallback((url = "/") => {
    history.push(url);
  }, [])

  const onChangePage = useCallback((page) => {
    setCurentPage(page);
  }, [])

  const _getUsers = async() => {
    setIsLoading(true);
    try {
      const params = {
        page: currentPage,
        gender: filterGender === 'all' ? null : filterGender,
        keyword: searchKeyword || null,
      }
      const { data } = await getUsers(params);
      if (data.results.length) {
        setUsers(data.results);
      }
    } catch (error) {
      console.error('users-error', error)
      errorNotif('Users | Something went wrong')
    }
    setIsLoading(false);
  }

  useEffect(() => {
    _getUsers();
  }, [currentPage, filterGender])
  
  return (
    <MainContext.Provider 
      {...props}
      value={{
        users,
        isLoading,
        searchKeyword, 
        filterGender, onFilterGender,
        onSearch, onRedirect,
        onResetFilter,
        currentPage, onChangePage,
      }}
    />
  )
}

export const useMainContext = () => useContext(MainContext);