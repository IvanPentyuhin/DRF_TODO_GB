import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''}
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handelSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handelSubmit(event)}>
                <input type='text' name='login' placeholder='login'
                       value={this.state.login} onChange={(event) => this.handleChange(event)}/>
                <input type='password' name='password' placeholder='password'
                       value={this.state.password} onChange={(event) => this.handleChange(event)}/>
            </form>
        );
    }
}

export default LoginForm
