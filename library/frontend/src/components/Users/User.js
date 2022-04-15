import React from 'react'

const UserItem = ({item}) => {
    return (
        <tr>
            <td>{item.user_name}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.birthday_year}</td>

        </tr>)
}


const UserList = ({items}) => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>First name</th>
                <th>Last name</th>
                <th>birthday year</th>
            </tr>
            {items.map((item) => <UserItem item={item}/>)}
        </table>
    )
}

export default UserList
