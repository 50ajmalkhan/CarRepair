import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "./../redux/actions/index";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const userref = useRef(null);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userref.current.value));
    userref.current.value = "";
    toast.success("User Added Sucessfully");
  };
  const handleRomoveUser = (index) => {
    dispatch(removeUser(index));
    toast.warn("User Removed Successfuly");
  };
  //back to previous page
  let history = useHistory();
  const handleRoute = () => {
    history.push("/");
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2>User Component Using Hooks and redux example</h2>
        <input type="text" ref={userref} />
      </form>

      <ul>
        {user.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => handleRomoveUser(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <button onClick={handleRoute}>Go Back</button>
    </>
  );
};

export default User;
