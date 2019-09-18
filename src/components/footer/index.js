import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';

export default class Footer extends Component {
    render() {

        return (
            <footer className="app-footer">
                <div className="app-footer-menu">
                    <div className="app-footer-menu-container">
                        <ul className="app-footer-menu-items">
                            <li>Об отеле</li>
                            <li>Расположение</li>
                            <li>Номера</li>
                            <li>Ресторан</li>
                            <li>Конференц-зал</li>
                            <li>Специальные предложения</li>
                        </ul>
                    </div>
                </div>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-container">
                        <ul className="app-footer-menu-items">
                            <li>Реквизиты</li>
                            <li>Конфиденциальность</li>
                            <li>Программа лояльности</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-container">
                        <ul className="app-footer-menu-items">
                            <li><FontAwesomeIcon icon={['fab', 'facebook-square']}/> facebook</li>
                            <li><FontAwesomeIcon icon={['fab', 'instagram']}/> instagram</li>
                            <li><FontAwesomeIcon icon={['fab', 'whatsapp']}/> whatsapp</li>
                            <li>
                                <FontAwesomeIcon icon={['fas', 'phone-square']}/> <a
                                href="callto:+78122429900">+7(812)242-99-00</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fas', 'map-marked']}/> Расстанная ул., д. 2, корпус 1,
                                Санкт-Петербург, 192007
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}