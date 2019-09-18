import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {getRestaurantInfo} from "../../reducers/restaurant"
import './style.scss';
import twin from "../../images/2.jpg";

class Restaurant extends Component {
    componentDidMount() {
        this.props.getRestaurantInfo()
    }

    render() {
        const {restaurant} = this.props
        if (!restaurant.data) return <div className="route-page">Loading...</div>
        const data = restaurant.data;

        return (
            <section className="restaurant route-page">
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><Link to="/">Главная</Link></li>
                        <li>/</li>
                        <li>РЕСТОРАНЫ</li>
                    </ul>
                </section>
                <div className="heading">
                    <h2>РЕСТОРАНЫ</h2>
                    <div className="sub-title">
                        <span className="text">Широкий выбор</span>
                        <div className="sub-child-title">В ОТЕЛЕ «БАЛЧУГ КЕМПИНСКИ МОСКВА»</div>
                    </div>
                </div>
                <div className="restaurant-content-block-wrapper">
                    <div className="app-content-block-wrapper">
                        <div className="app-content-block">
                            <div className="app-content-block-text">
                                <div className="text-heading">РЕСТОРАНЫ И БАРЫ ОТЕЛЯ</div>
                                <p>{data.details.shortInfo}</p>
                            </div>
                            <img alt="Стандарт DBL" src={twin} width="300px"/>
                        </div>
                    </div>
                </div>
                <div className="restaurant-spec-offers">
                    <div className="heading">
                        <h2>ПРЕДЛОЖЕНИЯ ДЛЯ ГУРМАНОВ</h2>
                        <div className="sub-title">
                            <span className="text">Утонченность и изысканность</span>
                            <div className="sub-child-title">НАСЛАДИТЕСЬ ОСОБЫМИ БЛЮДАМИ»</div>
                        </div>
                    </div>
                    <div className="offers-g">
                        {
                            data.cards.map((card, i) => {
                                return <div className="restaurant-spec-offers-card" key={`${i}${Date.now()}`}>
                                    <img src={twin} width="300px" alt={twin}/>
                                    <div className="offer-title">{card.name}</div>
                                    <div className="offer-subtitle">{card.subname}</div>
                                    <p>{card.info}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="contacts">
                    <div className="contact-block">
                        <div className="title">Адрес и контактная информация</div>
                        <div className="contact-detail">
                            <table style={{width: "43%"}} className="address">
                                <tbody>
                                <tr>
                                    <td style={{verticalAlign: "top"}}><strong>Адрес:</strong></td>
                                    <td>{data.address.hotel}<br/>
                                        {data.address.street}<br/>
                                        {data.address.country}
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <table style={{width: "43%"}}>
                                <tbody>
                                <tr>
                                    <td><strong>Контакты:</strong></td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Телефон:</strong></td>
                                    <td>{data.phone}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <br/>
                    <div className="working-times">
                        <div className="title">Открыт {data.workingTime}</div>
                        <div className="title">Часы завтраков {data.foodTimes.breakfast}</div>
                        <div className="title">Часы бранчей {data.foodTimes.branch}</div>
                        <div className="title">Часы бизнес-ланчей {data.foodTimes.businessLunch}</div>
                        <div className="title">Тип кухнии {data.kitchenType}</div>
                        <div className="title">Вместимость {data.capacity}</div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurant.restaurant
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantInfo: () => {
            dispatch(getRestaurantInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);