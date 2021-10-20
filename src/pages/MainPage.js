import React from 'react';
import { Input, Button, Table } from 'antd';
import InputSelect from '../components/InputSelect';
import { FILTER_OPTIONS } from '../constant/filter';
import { useMainContext } from '../context/MainContext';
import { get } from 'lodash';

const { Search } = Input;

const MainPage = () => {
  const {
    users,
    isLoading,
    searchKeyword,
    onSearch,
    onResetFilter,
    filterGender, onFilterGender,
    currentPage, onChangePage
  } = useMainContext();

  const makeCell = (key, title) => {
    return {
      key: key,
      dataIndex: key,
      title,
      width: 'left',
      sorter: (a, b) => get(a, key, '').localeCompare(get(b, key, '')),
      render: (_, record) => get(record, key, ''),
    };
  }

  const columns = [
    { ...(makeCell('login.username', 'Username')) },
    { ...(makeCell('name.first', 'Name')) },
    { ...(makeCell('email', 'Email')) },
    { ...(makeCell('gender', 'Gender')) },
    { ...(makeCell('registered.date', 'Registered Date')) },
  ]

  return (
    <div className='container-main-page'>
      <div className='container-filter pt-2 px-3'>
        <Search 
          placeholder="Search" 
          allowClear 
          onChange={onSearch}
          className='mr-3 mb-3'
          style={{ width: 300 }}
          value={searchKeyword}
        />

        <InputSelect className='mr-3 mb-3' value={filterGender} options={FILTER_OPTIONS} onChange={onFilterGender} />
        <Button className='mb-3' onClick={onResetFilter}>Reset Filter</Button>
      </div>

      <div className='pt-2 px-3'>
        <Table
          loading={isLoading}
          columns={columns} 
          dataSource={users} 
          pagination={{
            pageSize: 10,
            // + 1 to trigger next page since the api not support for the whole user data in database
            total: users.length * (currentPage + 1),
            current: currentPage,
            onChange: onChangePage,
            showSizeChanger: false
          }}
        />
      </div>

    </div>
  )
}

export default MainPage
