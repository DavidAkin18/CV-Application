
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useFormHook';
import '../style/General.css';

const GeneralInfo = props => {
  const [values, handleChange] = useForm({
    name: 'Enter FullName',
    email: 'your@email.com',
    number: '080909999',
  });

  const [editMode, setEditMode] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displayInfo = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <fieldset>
            <legend>General information Section</legend>
        <div className="header__contact-details">

          <label htmlFor="name">Name:</label><br/>
          <input type="text" name="name" id='name'  value={values.name} onChange={handleChange}/>
          <br/><br/>

          <label htmlFor="email">Email: </label><br/>
          <input type="email"  name="email" id='email' value={values.email} onChange={handleChange}/>
          <br/><br/>

          <label htmlFor="tel">Phone Number:</label><br/>
          <input type="number" name="number" id='tel'  value={values.number} onChange={handleChange}/>
        </div><br/>
        <button ref={btnRef} type="submit" onClick={saveOrEdit} className="btn btn--save">SAVE</button>
        </fieldset>
      </form>
    ) : (

        <div className="header__name">
            <fieldset>
                <legend>General information Section</legend>
                <h4>{values.name}</h4>
                <div>
                <p>{values.email}</p>
                <p>{values.number}</p>
                </div>

                {props.previewMode ? null : (
                <button  onClick={saveOrEdit} className="btn btn--edit">EDIT</button>
                )}
            </fieldset>
      </div>
    );
  };

  return <div className="header__general-info">{displayInfo()}</div>;
};

export default GeneralInfo;