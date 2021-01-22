import React from 'react';

export default function Switchh() {
  const [check, setCheck] = React.useState({
    checked: false,
  });

  return {
    check,
    setCheck
  };
}