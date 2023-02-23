import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { updateStatus, fetchName } from '../store/actions/action';
import { UPDATE_AGE, UPDATE_NAME, UPDATE_STATUS } from "../store/reducers/userReducer"

function Profile() {
    const { name, age, status } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // using redux
    // const updateAge = (age) => {
    //   console.log('updataAge called')
    //     dispatch({ type: "UPDATE_AGE", payload: age });
    // }

    // using redux-toolkit
    const updateAge = (age) => {
      console.log('updataAge called')
        dispatch(UPDATE_AGE(2));
    }

    // using redux-toolkit
    const changeStatus = (status) => {
      console.log('updataeStatus called')
      dispatch(UPDATE_STATUS(status))
    }

    // using redux
    // const changeName = (name) => {
    //   console.log('updataeName called')
    //   // dispatch(fetchName(name));
    //   dispatch({ type: "UPDATE_NAME", payload: name });
    // }

    // using redux-toolkit
    const changeName = (name) => {
      console.log('updataeName called')
      dispatch(UPDATE_NAME(name));
    }
  return (
    <div>
      I'm {name}.
      I'm {age} years old.
      I'm {status}.
      <button onClick={() => updateAge(2)}>update age</button>
      <button onClick={() => changeStatus("Changed")}>update status</button>
      <button onClick={() => changeName("Changed name")}>update name</button>
    </div>
  )
}

export default Profile
