import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import ShowMoreText from 'react-show-more-text';

import {getOffers} from "../../reducers/offers"
import {BASE_URL} from "../../store"
import './style.scss';

class SpecialOffers extends Component {
    componentDidMount() {
        this.props.getOffers()
    }

    seeMore = (i) => {
        this.setState(prevState => ({
            isFull: !prevState.isFull,
            currentIndex: i
        }))
    }

    render() {
        const {offers} = this.props;

        if (!offers.data) return <div className="route-page">Loading...</div>
        const data = offers.data;

        return (
            <section className="special-offers route-page">
                <section className="app-bread-crumbs">
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'chevron-right']}/></li>
                        <li><Link to="/">Главная</Link></li>
                        <li>/</li>
                        <li>Специальные предложения</li>
                    </ul>
                </section>
                <div className="heading">
                    <h2>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
                    <div className="sub-title">
                        <span className="text">Побалуйте себя</span>
                        <div className="sub-child-title">НЕЗАБЫВАЕМЫЕ ВПЕЧАТЛЕНИЯ</div>
                    </div>
                </div>
                <div className="offers-wrap">
                    {
                        data.map((d, i) => {
                            return <div className="app-content-block-wrapper" key={i}>
                                <div className="app-content-block" style={{
                                    height: 'fit-content',
                                    background: ` url(${BASE_URL}/static/media/2.934af43c.jpg)`
                                }}>
                                    <div className="content-wrap">
                                        <div className="app-content-block-wrapper">
                                            <div className="app-content-block">
                                                <div className="title">{d.details.name}</div>
                                                <ShowMoreText
                                                    lines={3}
                                                    more='Показать'
                                                    less='Свернуть'
                                                    anchorClass='btn-readmore'
                                                >
                                                    <p className="details-text">{d.details.text} </p>
                                                </ShowMoreText>
                                            </div>
                                            <div className="rate-block">
                                                <div className="rate">
                                                    <span className="offer-type-description">Цены от</span><br/>
                                                    <span className="price special-offer-prices">RUB {d.details.value}</span>

                                                    <div className="cta-btns">
                                                        <button className=" btn-book-now">ЗАБРОНИРОВАТЬ</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-valid">Окончание срока действия {d.validTo}</div>
                                    </div>
                                </div>

                            </div>
                        })
                    }

                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        offers: state.offers.offers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOffers: () => {
            dispatch(getOffers())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffers);