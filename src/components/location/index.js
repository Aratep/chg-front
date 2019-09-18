import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {getHotelInfo} from "../../reducers/hotel-info"
import './style.scss';

class Location extends Component {
    componentDidMount() {
        this.props.getHotelInfo()
    }

    render() {
        const {hotelInfo, hotel} = this.props
        if (!hotelInfo.data) return <div className="route-page">Loading...</div>
        const hotelLocation = hotelInfo.data.hotelLocatoin;

        return (
            <section className="hotel-location route-page">
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><Link to="/">Главная</Link></li>
                        <li>/</li>
                        <li>Расположения отеля</li>
                    </ul>
                </section>
                <div className="heading">
                    <h2>{hotel}</h2>
                    <div className="sub-title">
                        <span className="text">Удобное расположение</span>
                    </div>
                </div>

                <div className="hotel-location-map-container">
                    <iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCbkE075" width="560"
                            height="400"
                            frameBorder="1" allowFullScreen={true}/>
                </div>
                <div className="container">
                    <div className="editor-content">
                        <h2>Информация о расположении</h2>
                        <p>{hotelLocation.shortInfo}</p>
                    </div>
                </div>
                <div className="about-section contact-section section-block">
                    <div className="container">
                        <div className="contact-block">
                            <div className="title">Адрес и контактная информация</div>
                            <div className="contact-detail">
                                <table style={{width: "43%"}} className="address">
                                    <tbody>
                                    <tr>
                                        <td><strong>Адрес:</strong></td>
                                        <td>{hotelLocation.address.hotel}<br/>
                                            {hotelLocation.address.street}<br/>
                                            {hotelLocation.address.country}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <table style={{width: "43%"}} className="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td><strong>Контакты:</strong></td>
                                        <td>{hotelLocation.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Телефон:</strong></td>
                                        <td>{hotelLocation.phone}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div><br/>
                        <div className="contact-block">
                            <div className="title">Время заселения/выезда</div>
                            <p>
                                <strong>Заселение {hotelLocation.in}</strong> <span>&nbsp; - &nbsp;</span>
                                <strong>Время выезда {hotelLocation.out}</strong>
                            </p>
                        </div>
                        <div className="contact-block">
                            <div className="title">Информация о прибытии</div>
                            <div className="about-tab-item">
                                <div id="accordion_arrival-information" className="panel-group">
                                    <div className="panel panel-default faq-item">
                                        <div id="tab-item-1254acc0-944b-4d8b-96bd-ed60d8a95987"
                                             className="panel-heading"><span className="question">Информация о размещении в отеле</span>
                                        </div>
                                        <div id="tab-item-content-1254acc0-944b-4d8b-96bd-ed60d8a95987"
                                             className="panel-collapse">
                                            <div className="panel-body">
                                                <div className="answer"><p>Время заезда - 15:00<br/>Время выезда - 12:00
                                                </p><p>В случае если Вам необходим ранний заезд или поздний выезд,
                                                    пожалуйста, свяжитесь со службой приема и размещения. Услуга
                                                    предоставляется в зависимости от загрузки отеля. В этом случае может
                                                    взиматься дополнительная плата.&nbsp;В соответствии с действующим
                                                    законодательством Российской Федерации, заселение и регистрация
                                                    гостей производится только при наличии общегражданского паспорта.
                                                    Иные документы, удостоверяющие личность, не могут служить основанием
                                                    для заселения в Отель.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-description"/>
                        </div>
                        <div className="contact-block">
                            <div className="title">Направления</div>
                            <div className="about-description"/>
                            <div className="about-tab-item">
                                <div id="accordion_directions" className="panel-group">
                                    <div className="panel panel-default faq-item">
                                        <div id="tab-item-18b32ea2-44f1-4046-9703-8fcc5a2465d5"
                                             className="panel-heading"><span className="question">На самолете</span>
                                        </div>
                                        <div id="tab-item-content-18b32ea2-44f1-4046-9703-8fcc5a2465d5"
                                             className="panel-collapse">
                                            <div className="panel-body">
                                                <div className="answer"><p>Шереметьево (SVO) – 35 км, 60 мин. на
                                                    машине<br/>Домодедово (DME) – 50 км, 75 мин. на машине или 45 мин.
                                                    на аэроэкспрессе<br/>Внуково (VKO) – 20 км, 60 мин. на машине<br/>Жуковский
                                                    (ZIA) – 45 км, 105 мин. на машине</p><p>Вы можете заказать трансфер
                                                    из аэропорта по тел.:<a href="tel://749528720%2000">+7 (495) 287 20
                                                        00</a> или эл.почте <a
                                                        href="mailto:%20concierge.baltschug@kempisnki.com">concierge.baltschug@kempinski.com</a>.
                                                    Стоимость услуги варьируется от расстояния, автомобиля и времени
                                                    суток.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default faq-item">
                                        <div id="tab-item-4f3c6142-3fc9-4922-a589-60dd52bfff09"
                                             className="panel-heading"><span className="question">На поезде</span></div>
                                        <div id="tab-item-content-4f3c6142-3fc9-4922-a589-60dd52bfff09"
                                             className="panel-collapse">
                                            <div className="panel-body">
                                                <div className="answer"><p><span>Белорусский вокзал - 5 км, 10 мин. на машине</span><br/><span>Киевский вокзал - 5 км, 10 мин. на машине</span><br/><span>Ленинградский вокзал - 5 км, 10 мин. на машине</span>
                                                </p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default faq-item">
                                        <div id="tab-item-dfe77f9b-9758-4c75-871c-f0e0da8a4b03"
                                             className="panel-heading"><span className="question">Метро</span></div>
                                        <div id="tab-item-content-dfe77f9b-9758-4c75-871c-f0e0da8a4b03"
                                             className="panel-collapse">
                                            <div className="panel-body">
                                                <div className="answer"><p>
                                                    <span>Новокузнецкая - 700 м, 9 мин. пешком</span><br/><span>Третьяковская - 950 м, 12 мин. пешком</span>
                                                </p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-description"><p/></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hotelInfo: state.hotelInfo.hotelInfo,
        hotel: state.hotelInfo.hotel
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHotelInfo: () => {
            dispatch(getHotelInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);