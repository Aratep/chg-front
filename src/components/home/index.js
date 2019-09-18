import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import bem from 'b_';

import './style.scss';
import twin from "../../images/2.jpg";
import Slider from "../slider";
import {getHotelInfo} from "../../reducers/hotel-info"
import superior from "../../images/fon_superior.jpg";
const block = bem.with('app-content-slider');

class Content extends Component {
    componentDidMount = () => {
        this.props.getHotelInfo()
    }

    render() {
        const {hotelInfo, hotel} = this.props
        if (!hotelInfo.data) return <div className="route-page">Loading...</div>
        const info = hotelInfo.data.hotelInfo;
        // const location = hotelInfo.data.hotelLocatoin;

        return (
            <div>
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><a href="/">Главная</a></li>
                        <li>/</li>
                        <li>Об отеле</li>
                    </ul>
                </section>

                <div className="heading">
                    <h2>ИЗЫСКАННЫЙ ЕВРОПЕЙСКИЙ СТИЛЬ</h2>
                    <div className="sub-title">
                        <span className="text">в {hotel}</span>
                    </div>
                </div>
                <section className="home-block-wrapper">
                    <div className="block-wrapper">
                        <div className="home-content-block">
                            <div className="home-block-text">
                                <div className="text-heading">«БАЛЧУГ КЕМПИНСКИ» | 5-ЗВЕЗДОЧНЫЙ ОТЕЛЬ В ЦЕНТРЕ МОСКВЫ</div>
                                <p>{info.shortInfo}</p>
                            </div>
                            <div className="home-map-container">
                                <iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCbkE075" width="560"
                                        height="400"
                                        frameBorder="1" allowFullScreen={true}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="special-cards-wrapper">
                    <div className="heading">
                        <h2>ОСОБЫЕ ПРЕДЛОЖЕНИЯ</h2>
                        <div className="sub-title">
                            <span className="text">Номера и люксы</span>
                            <div className="sub-child-title">ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ</div>
                        </div>
                    </div>
                    <section className="special-cards">
                        {
                            info.cards.map((card, i) => {
                                return <div className="card" key={`${i}${Date.now()}`}>
                                    <img alt="Стандарт DBL" src={twin} width="300px"/>
                                    <div className="info-wrapper">
                                        <div className="title">{card.name}</div>
                                        <p className="info">{card.info}</p>
                                    </div>
                                    <div className="value">
                                        <div>Цены от</div>
                                        <div>RUB</div>
                                        {card.value}
                                        <button className=" read-more">ЗАБРОНИРОВАТЬ</button>
                                    </div>
                                </div>
                            })
                        }

                    </section>
                </section>
                <section className="app-content">

                    <div className="app-content-block-wrapper">
                        <Slider>
                            { info.images.map((img) => (
                                <div key={img.title} className={block('block')}>
                                    <img className={block('block-img')} alt="Superior" src={superior}/>
                                    <div className={block('block-text-wrapper')}>
                                        <div className={block('block-text')}>
                                            <h3>{img.title}</h3>
                                            <p>{img.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hotelInfo: state.hotelInfo.hotelInfo,
        hotel: state.hotelInfo.hotel,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHotelInfo: () => {
            dispatch(getHotelInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
