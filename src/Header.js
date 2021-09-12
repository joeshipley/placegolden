import './Header.css';
import { AppBar, Toolbar } from '@material-ui/core';

function Header() {
  const displayDesktop = () => {
    return <Toolbar>PlaceGolden</Toolbar>
  }

  return (
    <div className="header">
      <AppBar>{displayDesktop()}</AppBar>
    </div>
  );
}

export default Header;