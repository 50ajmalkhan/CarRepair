import React from 'react';
import { useState } from 'react';

const Test = () => {
  const [service, setService] = useState({
    wash: false,
    clean: true
  })
  const handleChange = (e) => {
    console.log(e.target.checked);
    setService({ ...service, [e.target.name]: e.target.checked })
  }


  return (

    <div>
      <input type="checkbox" name="wash" checked={service.wash} onChange={(e) => handleChange(e)} /> wash <br />
      <input type="checkbox" name="clean" checked={service.clean} onChange={(e) => handleChange(e)} /> clean <br />
    </div>
  );
}

export default Test;