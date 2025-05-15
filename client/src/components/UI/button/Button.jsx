import React from 'react';

const Button = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props} title={props.title} className="btn">
      {children}
    </button>
  );
};

export default Button;
