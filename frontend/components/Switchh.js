import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Switchh() {
  const [check, setCheck] = React.useState({
    checked: false,

  });

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  return (
    <Switch
        checked={check.checked}
        onChange={handleChange}
        name="checked"
      />
  );
}