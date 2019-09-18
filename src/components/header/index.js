import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

import './style.scss';
import logo from "../../images/chg.png";
import tripadvisor from "../../images/tripadvisor.png";
import {toggleAuthModal, setHotel} from "../../actions/index"

const languages = ["Русский", "English"]
const hotels = ["Отель «Бристоль»", "Отель «Другой»"]

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLangOPen: false,
            isHotelOPen: false,
            lang: "Русский",
            _hotel: "Отель «Бристоль»"
        }
    }

    componentDidMount() {
        this.props.setHotel(this.state._hotel)
    }

    onLangOpen = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isLangOPen: !prevState.isLangOPen
        }));
    }

    onHotelOpen = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isHotelOPen: !prevState.isHotelOPen
        }));
    }

    onLanguageSelect = (lang) => {
        this.setState({lang})
    }

    onHotelSelect = (hotel) => {
        const _hotel = hotel || this.state._hotel
        this.setState({_hotel})
        this.props.setHotel(_hotel)
    }

    onAuthToggle = () => {
        this.props.toggleAuthModal();
    }

    render() {
        const {isLangOPen, lang, isHotelOPen, _hotel} = this.state;
        const {isAuthOpen} = this.props

        return (
            <header className="app-header">
                <div className="app-header-top">
                    <img src={logo} className="app-logo" alt="logo"/>
                    <div className="app-header-title">
                        <h1>Отель «Бристоль»</h1>
                        <div className="app-header-title-text">
                            <span className="app-header-line-left"/>
                            <span className="app-header-line-text">Санкт-Петербург, Российская Федерация</span>
                            <span className="app-header-line-right"/>
                        </div>
                    </div>
                    <div>
                        <div className="app-header-lang" onClick={this.onHotelOpen}>
                            <span className="cursor">{_hotel}
                                <FontAwesomeIcon icon={['fas', 'chevron-down']}/>
                            </span>
                            <div className="app-header-lang-wrap"
                                 style={{
                                     display: isHotelOPen ? "block" : "none"
                                 }}
                            >
                                {
                                    hotels.map(hotel => {
                                        return <div key={hotel} className="app-header-language"
                                                    onClick={this.onHotelSelect.bind(this, hotel)}>
                                            {hotel}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="app-block-row">
                            <div className="app-header-lang" onClick={this.onLangOpen}>
                                <span className="cursor">{lang} <FontAwesomeIcon icon={['fas', 'chevron-down']}/></span>

                                <div className="app-header-lang-wrap"
                                     style={{
                                         display: isLangOPen ? "block" : "none"
                                     }}
                                >
                                    {
                                        languages.map(lang => {
                                            return <div key={lang} className="app-header-language"
                                                        onClick={this.onLanguageSelect.bind(this, lang)}>
                                                {lang}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="app-header-login" onClick={this.onAuthToggle}>
                                <span className="cursor login"><FontAwesomeIcon icon={['fas', 'user']}/> Войти</span>
                                <div className="app-header-auth"
                                     style={{
                                         display: isAuthOpen ? "block" : "none"
                                     }}
                                >
                                    <Link to="/register">СОЗДАТЬ НОВУЮ УЧЕТНУЮ ЗАПИСЬ </Link> или
                                    <Link to="/login">ВОЙДИТЕ В СВОЮ УЧЕТНУЮ ЗАПИСЬ </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="app-header-menu" >
                    <div className="app-header-menu-container">
                        <h1>Отель «Бристоль»</h1>
                        <ul className="app-header-menu-items">
                            <li><span className="cursor"><Link to="/">Об отеле</Link></span></li>
                            <li><span className="cursor"><Link to="/location">Расположение</Link></span></li>
                            <li><span className="cursor"><Link to="/rooms">Номера</Link></span></li>
                            <li><span className="cursor"><Link to="/restaurant">Ресторан</Link></span></li>
                            <li><span className="cursor"><Link to="/conference-room">Конференц-зал</Link></span></li>
                            <li><span className="cursor"><Link to="/special-offers">Специальные предложения</Link></span></li>
                        </ul>
                    </div>
                    <div className="app-header-map-container">
                        <iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCbkE075" width="560"
                                height="400"
                                frameBorder="1" allowFullScreen={true}/>
                    </div>
                    <div className="app-header-scores-container">
                        <div className="app-header-booking-container">
                            <div className="app-header-booking-logo">
                                <img
                                    src="https://s-ec.bstatic.com/static/img/b26logo/booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png"
                                    alt="Система бронирования отелей онлайн Booking.com"/>
                            </div>
                            <div className="app-header-booking-block">
                                <div className="app-header-booking-score__badge">8,7</div>
                                <div className="app-header-booking-score__content">
                                    <div className="app-header-booking-score__title">Потрясающе</div>
                                    <div className="app-header-booking-score__text"> 1&nbsp;315 отзывов</div>
                                </div>
                            </div>
                        </div>
                        <div className="app-header-tripadvisor-container">
                            <div className="app-header-tripadvisor-logo">
                                <img
                                    src="https://static.tacdn.com/img2/langs/ru/branding/rebrand/TA_logo_secondary_v3.svg"
                                    alt="TripAdvisor"/>
                            </div>
                            <img width="234" alt="TripAdvisor" src={tripadvisor}/>
                        </div>
                    </div>
                </div>
                <div className="app-header-form">
                    <form>
                        <input type="text" defaultValue="08.05.2019"/>
                        <input type="text" defaultValue="09.05.2019"/>
                        <input type="text" defaultValue="2"/>
                        <input type="button" value="Бронировать"/>
                    </form>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        isAuthOpen: state.modals.isAuthOpen,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        toggleAuthModal: () => {
            dispatch(toggleAuthModal())
        },
        setHotel: (hotel) => {
            dispatch(setHotel(hotel))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);