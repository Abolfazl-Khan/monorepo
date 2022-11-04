import React from 'react';
import Select from './Select';
import { render, screen, fireEvent } from '@testing-library/react';

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
];

it('should render options correctly', () => {
  render(<Select options={options} />);

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  expect(screen.getAllByRole('menuitemradio')).toHaveLength(options.length);
});

it('should render if custom renderOption is passed as prop', () => {
  render(
    <Select
      options={options}
      renderOption={({ option, getOptionRecommendedProps }) => {
        return (
          <li data-testid='CustomRenderOption' {...getOptionRecommendedProps()}>
            {option.label}
          </li>
        );
      }}
    />
  );

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  expect(screen.getAllByTestId('CustomRenderOption')).toHaveLength(
    options.length
  );
});

it('should select the option correctly', () => {
  const onOptionSelected = jest.fn();
  render(<Select options={options} onOptionSelected={onOptionSelected} />);

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  fireEvent.click(screen.getAllByRole('menuitemradio')[0]);

  expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0);
});

it('should changes the label after selecting an option', () => {
  render(<Select options={options} />);

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  fireEvent.click(screen.getAllByRole('menuitemradio')[0]);

  expect(screen.getByTestId('DseSelectButton')).toHaveTextContent(
    options[0].label
  );
});

it('tests snapshot of the selected option state', () => {
  const { asFragment } = render(<Select options={options} />);

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  fireEvent.click(screen.getAllByRole('menuitemradio')[0]);

  expect(asFragment()).toMatchSnapshot();
});

it('tests snapshot of the base state', () => {
  const { asFragment } = render(<Select options={options} />);

  expect(asFragment()).toMatchSnapshot();
});

it('tests snapshot of the options menu open state', () => {
  const { asFragment } = render(<Select options={options} />);

  fireEvent.click(screen.getByTestId('DseSelectButton'));

  expect(asFragment()).toMatchSnapshot();
});

it('can customize select label', () => {
  render(<Select options={options} label='THIS IS A CUSTOM LABEL' />);

  expect(screen.getByText(/THIS IS A CUSTOM LABEL/)).toBeInTheDocument();
});
