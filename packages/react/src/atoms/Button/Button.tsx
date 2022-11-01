import React from 'react';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className='dse-button-container'>{label}</button>;
};

export default Button;
