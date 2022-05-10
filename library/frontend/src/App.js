import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import UserList from './components/Users/User.js';
import TodoList from './components/Todos/Todos.js';
import ProjectList from './components/Projects/Projects';
import axios from 'axios';
import LoginForm from "./components/Auth/Auth";
import Cookies from "universal-cookie/es6";
import Header from "./components/Header/Header";
import "./components/Header/Header.css"

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена </h1>
        </div> )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        const user1 = {user_name: 'Грин', first_name: 'Грин', last_name: 'Грин', birthday_year: 1880}
        const user2 = {user_name: 'Грин', first_name: 'Грин', last_name: 'Грин', birthday_year: 1880}
        const users = [user1, user2]
        const todo1 = {project: 'my_project', user: 'Грин', text: 'dsfsfsfs'}
        const todo2 = {project: 'my_project2', user: 'Грин', text: '12312312'}
        const todos = [todo1, todo2]
        const project = {name: 'AJAX', repository: 'https://github.com/IvanPentyuhin/DRF_TODO_GB/pull/2', users: 'GRIN'}
        const projects = [project]

        this.state = {
            'users': users,
            'todos': todos,
            'projects': projects,
            'token': '',
        }

    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_form_storage() {
        const cookies = new Cookies()
        const token =cookies.get('token')
        this.setState({'token': token}, ()=>this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {this.set_token(response.data['token']).catch(error => alert('Неверный логин или пароль'))})
    }

    get_headers() {
        let headers = {
            'Content_Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token' + this.state.token
        }
        return headers
    }

    load_data() {
        const  headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/todos/', {headers})
            .then(response => {
                this.setState({todos: response.data})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(response => {
                this.setState({projects: response.data})
            }).catch(error => {
            console.log(error)
            this.setState({projects: []})
        })
    }

    componentDidMount() {
        this.get_token_form_storage()
        this.load_data()
    }


    render() {
        return (

            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Users</Link>
                        </li>
                        <li>
                            <Link to='/todos'>Todos</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> :
                                <Link to='/login'>Login</Link>}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/*<Redirect from='/todos' to='/'></Redirect>*/}
                    <Route path='/' component={() => <UserList items={this.state.users}/>}/>
                    <Route path='/todos/' component={() => <TodoList items={this.state.todos}/>}/>
                    <Route path='/projects/' component={() => <ProjectList items={this.state.projects}/>}/>
                    <Route component={NotFound404}></Route>
                    <Route exact path='/login/' component={() => <LoginForm
                        get_token={(username, password) => this.get_token(username, password)}/>}/>
                </Routes>
            </BrowserRouter>

        )
    }
}


export default App;
