import React from 'react'

const TodoItem = ({item}) => {
    return (
        <tr>
            <td>{item.project}</td>
            <td>{item.user}</td>
            <td>{item.text}</td>
        </tr>)
}


const TodoList = ({items}) => {
    return (
        <table>
            <tr>
                <th>Project</th>
                <th>User</th>
                <th>Text</th>
            </tr>
            {items.map((item) => <TodoItem item={item}/>)}
        </table>
    )
}

export default TodoList
