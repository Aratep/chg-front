import React from 'react';
import {connect} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookSquare, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPhoneSquare, faMapMarked, faUser} from '@fortawesome/free-solid-svg-icons';
import {faBed, faMugHot, faSnowflake, faShower} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Header from './components/header';
import Footer from './components/footer';
import {AppRouting} from "./routes"

import './App.css';

library.add(faUser);
library.add(faChevronRight);
library.add(faChevronDown);

library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faWhatsapp);
library.add(faPhoneSquare);
library.add(faMapMarked);

library.add(faBed);
library.add(faMugHot);
library.add(faSnowflake);
library.add(faShower);

class App extends React.Component {
    render() {
        /*
        <div class="hotels-hotel-review-about-with-photos-Reviews__rating--2X_zZ">
                    <span class="hotels-hotel-review-about-with-photos-Reviews__overallRating--vElGA">4,5</span>
                    <a href="#REVIEWS" class="hotels-hotel-review-about-with-photos-Reviews__bubbleRating--GDW9V">
                      <div class="hotels-hotel-review-about-with-photos-Reviews__ratingLabel--24XY2">Отлично</div>
                      <span class="ui_bubble_rating bubble_45"></span>
                      <span class="hotels-hotel-review-about-with-photos-Reviews__seeAllReviews--3PpLR">609 отзывов</span>
                    </a>
                  </div>
                  <div class="hotels-hotel-review-about-with-photos-PopIndex__popIndex--zNSxv">
                    <span>№ 59 из 479 — отели — Санкт-Петербург</span>
                  </div>
                  <div class="hotels-hotel-review-about-with-photos-layout-Group__group--2kiVp">
                    <div class="hotels-hotel-review-about-with-photos-Awards__award--pJ47j">
                      <div class="hotels-hotel-review-about-with-photos-Awards__award_wrapper--39xEo">
                        <span class="ui_icon certificate-of-excellence hotels-hotel-review-about-with-photos-Awards__award_icon--b8yGa"></span>
                        <div class="hotels-hotel-review-about-with-photos-Awards__award_text--p3VZw">Сертификат качества</div>
                      </div>
                    </div>
                  </div>*/
        return (
            <div className="app">
                <Header />
                <AppRouting/>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
