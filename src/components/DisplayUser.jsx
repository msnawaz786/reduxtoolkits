import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useSelector , useDispatch } from 'react-redux'
import styled from 'styled-components';
import { removeUser } from '../store/slices/UserSlice';

export default function DisplayUser() {
    const data = useSelector((state) => state.users);
    const dispatch=useDispatch();

    const deleteUser=(id)=>{

        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
        <div>
            {data.map((user, id) => (
                <li key={id}>
                    {user}
                    <button className='btn-delete' onClick={()=>deleteUser(id)}>
                        <MdDeleteForever  className='delete-icon'/>
                    </button>
                </li>
            ))}
        </div>
        </Wrapper>
    );
}
const Wrapper=styled.section`
li{
width:100%;
display: flex;
border-bottom: 1px solid #eee;
padding: 1rem;
justify-content: space-between;

&:first-child{
border-top: 1px solid #eee;

}
}
`

