import React from 'react'
import styled from 'styled-components'
import { clearAllUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'
export default function DeleteAllUser() {
  const dispatch=useDispatch();
  const deleteAllUser=()=>{
dispatch(clearAllUser())
  }
  return (
    <Wrapper>
    <div>
      <button className='btn clear-btn' onClick={deleteAllUser}>Clear user</button>
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.clear-btn{
text-transform: capitalize;
background-color: #db338a;
margin-top: 2rem;

}

`
