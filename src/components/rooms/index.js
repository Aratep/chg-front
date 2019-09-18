import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getRooms} from "../../reducers/rooms"
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import twin from "../../images/2.jpg";
import Slider from "../slider/index"

class Rooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGaleryOpen: false,
            categoryId: null
        }
    }

    componentDidMount() {
        this.props.getRooms()
    }

    onGaleryToggle = (i) => {
        this.setState(prevState => ({
            isGaleryOpen: !prevState.isGaleryOpen,
            categoryId: i
        }))
    }

    render() {
        const {rooms, hotel} = this.props;
        const {isGaleryOpen, categoryId} = this.state;
        let category = []

        if (!rooms.data) return <div className="route-page">Loading...</div>
        const data = rooms.data;
        if(categoryId === null) {category = []}
        category = data.categories.filter(cat => cat.id === categoryId)

        return (
            <section className="rooms route-page">
                <section className="galery" style={{display: isGaleryOpen ? "block" : "none"}}>
                    <div className="close" onClick={this.onGaleryToggle}>X</div>
                    <Slider>
                        {
                            category.length > 0 && category[0].galery.map((gal, i) => {
                                return  <Slider key={`${i}${Date.now()}`}>
                                    <img alt="Стандарт DBL" src={twin} width="300px"/>
                                </Slider>
                            })
                        }
                    </Slider>
                </section>
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><Link to="/">Главная</Link></li>
                        <li>/</li>
                        <li>Номера</li>
                    </ul>
                </section>
                <div className="heading">
                    <h2>НОМЕРА И ЛЮКСЫ</h2>
                    <div className="sub-title">
                        <span className="text">в {hotel}</span>
                        <div className="sub-child-title">НАСТОЯЩАЯ РОСКОШЬ</div>
                    </div>
                </div>

                <section className="categories-wrapper">
                    <Slider>
                        {
                            data.categories.map((category, i) => {
                                return <section className="special-cards" key={`${i}${Date.now()}`}>
                                    <div className="card">
                                        <img alt="Стандарт DBL" src={twin} width="300px"/>
                                        <div className="info-wrapper">
                                            <div className="title">{category.name}</div>
                                            <p className="info">{category.info}</p>
                                            <button className=" read-more"
                                                    onClick={this.onGaleryToggle.bind(this, category.id)}>
                                                Фотогалерея
                                            </button>
                                            <button className=" read-more">ЗАБРОНИРОВАТЬ</button>
                                        </div>
                                    </div>
                                </section>
                            })
                        }
                    </Slider>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms.rooms,
        hotel: state.hotelInfo.hotel
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRooms: () => {
            dispatch(getRooms())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);