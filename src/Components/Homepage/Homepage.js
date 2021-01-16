import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Homepage.css';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Homepage = () => {
    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <h1>Homepage</h1>
    );
}

export default Homepage;