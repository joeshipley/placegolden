import './Header.css';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  makeStyles, 
  Button, 
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(161, 232, 204)",
    color: "rgb(73, 81, 89)",
  },
  logo: {
    fontFamily: "monotypeCorsiva",
  },
  menuButton: {
    fontFamily: "Arial, Helvetica, sans-serif",
    size: "30px",
    marginLeft: "40px",
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
  const { header, logo, menuButton } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>
      {placegoldenLogo}
      {getMenuButtons()}
      </Toolbar>;
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
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </div>
  );
}

export default Header;