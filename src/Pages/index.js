import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Dashboard } from '../Components';
import { getAllTodo } from '../store/Slices/authSlice';
const Pages = () => {
  const dispatch = useDispatch();
  const d= useSelector((state)=>({...state.auth}))
  useEffect(()=>{
    dispatch(getAllTodo());
  },[])
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default Pages
