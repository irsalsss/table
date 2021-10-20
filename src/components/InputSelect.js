import React, { memo } from 'react';
import { Select } from 'antd';
import PropTypes from "prop-types";

const { Option } = Select;

const InputSelect = ({ defaultValue, options, onChange, unique, className }) => {

  return (
    <Select 
      placeholder='Please select the user name'
      className={className}
      style={{ width: 300 }} 
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {options.map((v) => (
        <Option 
          key={v.id} 
          value={unique ? v[unique] : v.value || v.name}
        >
          {v.label || v.name}
        </Option>
      ))}
    </Select>
  )
}

InputSelect.propTypes = {
  unique: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  options: PropTypes.array,
  onChange: PropTypes.func,
}

InputSelect.defaultProps = {
  unique: '',
  className: '',
  defaultValue: null,
  options: [],
  onChange: () => {},
};

export default memo(InputSelect)
