import React, { memo } from 'react';
import { Select } from 'antd';
import PropTypes from "prop-types";

const { Option } = Select;

const InputSelect = ({ 
  defaultValue,
  options,
  onChange,
  unique,
  className,
  value
}) => {

  return (
    <Select
      data-testid="InputSelect"
      placeholder='Please select the user name'
      className={className}
      style={{ width: 300 }} 
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
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
  value: PropTypes.oneOfType([
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
  value: null,
  options: [],
  onChange: () => {},
};

export default memo(InputSelect)
