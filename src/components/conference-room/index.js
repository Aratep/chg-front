import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {getConferenceRoomInfo} from "../../reducers/conference-room"
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import twin from "../../images/2.jpg";

class ConferenceRoom extends Component {
    componentDidMount() {
        this.props.getConferenceRoomInfo()
    }

    render() {
        const {confRoom, hotel} = this.props
        if (!confRoom.data) return <div className="route-page">Loading...</div>
        const data = confRoom.data

        return (
            <section className="conference-room route-page">
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><Link to="/">Главная</Link></li>
                        <li>/</li>
                        <li>Конференс зал</li>
                    </ul>
                </section>
                <div className="heading">
                    <h2>Конференс зал</h2>
                    <div className="sub-title">
                        <div className="sub-child-title">В ОТЕЛЕ «{hotel}»</div>
                    </div>
                </div>
                <div className="conference-room-block-wrapper">
                    <div className="block-wrapper">
                        <div className="conference-room-content-block">
                            <div className="conference-room-block-text">
                                <div className="text-heading">Конференс зал</div>
                                <p>{data.details.shortInfo}</p>
                            </div>
                            <img alt="Стандарт DBL" src={twin} width="300px"/>
                        </div>
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

                            <table style={{width: "43%", textAlign: "left"}}>
                                <tbody>
                                <tr>
                                    <td><strong>Контакты:</strong></td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Телефон:</strong></td>
                                    <td>{data.phone}</td>
                                </tr>
                                <tr>
                                    <td><strong>Вместимость:</strong></td>
                                    <td>{data.capacity}</td>
                                </tr>
                                <tr>
                                    <td><strong>Ссылка на презентацию в pdf:</strong></td>
                                    <td>{data.presentation}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        confRoom: state.confRoom.confRoom,
        hotel: state.hotelInfo.hotel,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getConferenceRoomInfo: () => {
            dispatch(getConferenceRoomInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConferenceRoom);