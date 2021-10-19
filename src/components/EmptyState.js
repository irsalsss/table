import React from 'react';
import PropTypes from "prop-types";
import { Empty } from 'antd';

const EmptyState = ({ className }) => {
  return (
    <Empty className={className} image={Empty.PRESENTED_IMAGE_SIMPLE} />
  )
}

EmptyState.propTypes = {
  className: PropTypes.string,
}

EmptyState.defaultProps = {
  className: 'pt-6',
};

export default EmptyState
