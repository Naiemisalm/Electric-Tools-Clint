import React from 'react';

const User = ({ user }, index) => {
    const { email, role } = user;
    const makeAdmin =()=>{
        fetch(`https://aqueous-garden-58958.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        
        .then(res=>res.json())
        .then(data=>console.log(data));
    }

    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{ role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>} </td>
        <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
    );
}

export default User;