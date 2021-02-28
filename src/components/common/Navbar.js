import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Menu from './Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchEventAction } from '../../action/actions';

import {
  primaryColor,
  secondaryColor,
  textColor,
  flexBetween,
  flexStart,
  activeColor,
  fontFamily,
} from '../common/Scheme';

const menuData = [
  { menuName: 'Home', to: '/' },
  { menuName: 'Concerts', to: '/concerts' },
  { menuName: 'Sports', to: '/sports' },
  { menuName: 'About Us', to: '/aboutus' },
];

const useStyles = makeStyles((theme) => ({
  navContainerCss: {
    background: primaryColor,
    padding: '14px 8px',
    ...flexBetween,
  },
  logoWrapper: {
    ...flexStart,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  inputContainerCss: {
    background: secondaryColor,
    width: '300px',
    ...flexBetween,
    marginLeft: '20px',
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '5px',
    },
  },

  inputCss: {
    background: secondaryColor,
    padding: '8px 16px',
    color: textColor,
    fontSize: '12px',
    border: 'none',
    width: '100%',
    fontFamily,
    '&::placeholder': {
      color: 'white',
      fontSize: '12px',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnCss: {
    color: textColor,
    textTransform: 'capitalize',
    fontFamily,
    margin: 'auto 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: activeColor,
      transition: '0.2s ease-in-out',
    },
  },
  activeNavLink: {
    color: activeColor,
  },
  btnContainerCss: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  searcIconCss: {
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer',
  },
  linkCss: {
    marginTop: '4px',
  },
}));

function Navbar() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleInput = () => {
    dispatch(searchEventAction(keyword));
  };

  const classes = useStyles();
  const {
    navContainerCss,
    inputCss,
    logoWrapper,
    btnCss,
    activeNavLink,
    navLink,
    btnContainerCss,
    inputContainerCss,
    searcIconCss,
    linkCss,
  } = classes;

  return (
    <div className={navContainerCss}>
      <div className={logoWrapper}>
        <img src={logo} alt="eFinder-logo" />
        <div className={inputContainerCss}>
          <input
            type="text"
            value={keyword}
            className={inputCss}
            placeholder="Search by artists, sports or zip code"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Link to="/search" className={linkCss}>
            <SearchIcon
              className={searcIconCss}
              onClick={() => handleInput()}
            />
          </Link>
        </div>
      </div>
      <Menu />
      <div className={btnContainerCss}>
        {menuData.map((menu, index) => {
          return (
            <Button className={btnCss} key={index}>
              <NavLink
                exact
                to={menu.to}
                className={navLink}
                activeClassName={activeNavLink}
              >
                {menu.menuName}
              </NavLink>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
