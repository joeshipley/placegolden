import './Header.css';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  makeStyles, 
  Button, 
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(161, 232, 204)",
    color: "rgb(73, 81, 89)",
    paddingRight: "100px",
    paddingLeft: "10px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "monotypeCorsiva",
  },
  menuButton: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 500,
    size: "30px",
    marginLeft: "40px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  }
}));

const headersData = [
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'All Images',
    href: '/images'
  }
];

function Header() {
  const [state, setState] = useState({
    mobileView: false,
    menuOpen: false,
  });

  const { mobileView, menuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);


  const { header, logo, menuButton } = useStyles();

  const displayDesktop = () => {
    return (
    <Toolbar>
      {placegoldenLogo}
      <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleMenuOpen = () =>  {
      setState((prevState) => ({ ...prevState, menuOpen: true }));
    }
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleMenuOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
      <div>{placegoldenLogo}</div>
      </Toolbar>
    );
  };

  const placegoldenLogo = (
    <Typography variant="h4" component="h1" className={logo}>
      PlaceGolden
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
        {...{
          key: label,
          color: 'inherit',
          to: href,
          component: RouterLink,
          className: menuButton
        }}
      >
        {label}
      </Button>
      );
    });
  };

  return (
    <div>
      <AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </div>
  );
}

export default Header;