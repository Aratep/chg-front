import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"

import './style.scss';

class Login extends Component {

    render() {

        return (
            <div className="app-login">
                <div className="form">
                    <h1>Войдите</h1>
                    <form id="contactform">
                        <p className="contact"><label htmlFor="username">Имя пользователя</label></p>
                        <input id="username" name="username" placeholder="Имя пользователя" required tabIndex={2} type="text" />
                        <p className="contact"><label htmlFor="password">Пароль</label></p>
                        <input type="password" id="password" name="password" placeholder="Пароль" required />
                        <input className="buttom" name="submit" id="submit" tabIndex={5} value="Войти!" type="submit" />
                    </form>
                    <span>Не зарегистрированы? <Link to="/register">Создайте акаунт</Link></span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);