import './Header.css';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(161, 232, 204)",
    color: "rgb(73, 81, 89)",
  },
  logo: {
    fontFamily: "monotypeCorsiva",
  },
}));

const headersData = [
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'All Images',
    href: '/images'
  },
  {
    label: 'Github',
    href: 'https://github.com/cmmerritt/placegolden'
  }
];

function Header() {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{placegoldenLogo}</Toolbar>;
  };

  const placegoldenLogo = (
    <Typography variant="h4" component="h1" className={logo}>
      PlaceGolden
    </Typography>
  );

  return (
    <div>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </div>
  );
}

export default Header;