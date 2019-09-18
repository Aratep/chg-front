import React from 'react';
import SliderSlick from "react-slick";
import bem from 'b_';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleRight, faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

library.add(faChevronCircleLeft);
library.add(faChevronCircleRight);

const block = bem.with('app-content-slider');


function NextArrow(props) {
    const {style, onClick} = props;
    return (
        <div
            className={`${block('right')}`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={['fas', 'chevron-circle-right']}/>
        </div>
    );
}

const PrevArrow = (props) => {
    const {style, onClick} = props;
    return (
        <div
            className={`${block('left')}`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={['fas', 'chevron-circle-left']}/>
        </div>
    );

}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

export default class Slider extends React.Component {
    render() {
        return (
            <div className={block()}>
                <SliderSlick {...settings}>
                    {this.props.children}
                </SliderSlick>
            </div>
        );
    }
}

