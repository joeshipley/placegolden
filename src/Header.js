import './Header.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  const displayDesktop = () => {
    return <Toolbar>{placegoldenLogo}</Toolbar>;
  };

  const placegoldenLogo = (
    <Typography variant="h4" component="h1">
      PlaceGolden
    </Typography>
  );

  return (
    <div className="header">
      <AppBar>{displayDesktop()}</AppBar>
    </div>
  );
}

export default Header;