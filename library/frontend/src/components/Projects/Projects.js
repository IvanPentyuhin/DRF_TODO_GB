import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.repository}</td>
            <td>{item.users}</td>
        </tr>)
}


const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>NAME</th>
                <th>REPOSITORY</th>
                <th>USERS</th>
            </tr>
            {items.map((item) => <ProjectItem item={item}/>)}
        </table>
    )
}

export default ProjectList
