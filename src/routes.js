import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import HomePage from './components/home';
import Location from './components/location';
import Rooms from './components/rooms';
import Restaurant from './components/restaurant';
import ConferenceRoom from './components/conference-room';
import SpecialOffers from './components/special-offers';

export const AppRouting = () => (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/location" component={Location}/>
        <Route path="/rooms" component={Rooms}/>
        <Route path="/restaurant" component={Restaurant}/>
        <Route path="/conference-room" component={ConferenceRoom}/>
        <Route path="/special-offers" component={SpecialOffers}/>
        <Route path="/" component={HomePage}/>
    </Switch>
)