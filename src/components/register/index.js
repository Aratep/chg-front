import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"

import './style.scss';

class Register extends Component {

    render() {

        return (
            <div className="app-register">
                <div className="form">
                    <h1>Зарегистрируйтесь</h1>

                    <form id="contactform">
                        <p className="contact"><label htmlFor="name">Имя</label></p>
                        <input id="name" name="name" placeholder="Имя" required tabIndex={1} type="text" />
                        <p className="contact"><label htmlFor="surname">Фамилия</label></p>
                        <input id="surname" name="name" placeholder="Фамилия" required tabIndex={1} type="text" />
                        <p className="contact"><label htmlFor="email">Адрес электронной почты</label></p>
                        <input id="email" name="email" placeholder="example@domain.com" required type="email" />
                        <p className="contact"><label htmlFor="date">Birthdate</label></p>
                        <input type="date" id="date" required/>
                        <p className="contact"><label htmlFor="language">Язык коммуникации</label></p>
                        <select name="" id='language'>
                            <option>Выберите язык коммуникации</option>
                            <option>Русский</option>
                            <option>English</option>
                        </select>
                        <p className="contact"><label htmlFor="username">Имя пользователя</label></p>
                        <input id="username" name="username" placeholder="Имя пользователя" required tabIndex={2} type="text" />
                        <p className="contact"><label htmlFor="password">Пароль</label></p>
                        <input type="password" id="password" name="password" placeholder="Пароль" required />
                        <p className="contact"><label htmlFor="repassword">Повторите пароль</label></p>
                        <input type="password" id="repassword" name="repassword" placeholder="Повторите пароль" required />


                        <p className="contact"><label htmlFor="country">Страна</label></p>
                        <input id="country" name="country" placeholder="Страна" required type="text" /> <br />
                        <p className="contact"><label htmlFor="city">Город</label></p>
                        <input id="city" name="city" placeholder="Город" required type="text" /> <br />
                        <p className="contact"><label htmlFor="confirm">Согласен на обработку данных</label>
                        <input id="confirm" name="confirm" required type="checkbox" /></p> <br />

                        <input className="buttom" name="submit" id="submit" tabIndex={5} value="Зарегистрироватся!" type="submit" />
                    </form>
                    <span>Уже есть акаунт? <Link to="/login">Войдите</Link></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);