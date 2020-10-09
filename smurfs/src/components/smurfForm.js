import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import { addSmurfs} from '../store/actions';


const Form = (props) => {
  const [formState, setFormState] = useState({
      name: '',
      age: '',
      height: '',
  })

  const handleChanges = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
      e.preventDefault();
      setFormState('')
      props.addSmurfs(formState)
  };

  return (
      <div>
          <form onSubmit = {onSubmit} >
              <div>
                  <h1>Create your Smurf!</h1>
              </div>
              <input 
                type='text'
                name='name'
                value={formState.name}
                onChange={handleChanges}
              />
              <input 
                type='text'
                name='age'
                value={formState.age}
                onChange={handleChanges}
              />
              <input 
                type='text'
                name='height'
                value={formState.height}
                onChange={handleChanges}
              />

              <button >
                Add Smurf
              </button>
          </form>
      </div>
  )
};

export default connect(null, {addSmurfs}) (Form);
