import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputSelect from './InputSelect';
import { FILTER_OPTIONS } from '../constant/filter';

afterEach(cleanup)

const setup = () => {
  const utils = render(
    <InputSelect 
      className='mr-3 mb-3'
      value="all"
      options={FILTER_OPTIONS}
    />
  )
  const input = utils.getByTestId('InputSelect')

  return {
    input,
    ...utils,
  }
}

describe('Input select component', () => {
  it('renders correctly', () => {
    const { input } = setup();
    expect(input).toHaveTextContent('All')
  })

  it('should change the value', () => {
    const { input, rerender } = setup();
    rerender(
      <InputSelect 
        className='mr-3 mb-3'
        value="male"
        options={FILTER_OPTIONS}
      />
    )
    expect(input).toHaveTextContent('Male')
  })
})