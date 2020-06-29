import React from 'react';
import {Container} from "reactstrap";
import github from '@fortawesome/fontawesome-free/svgs/brands/github.svg'
import npm from '@fortawesome/fontawesome-free/svgs/brands/npm.svg'
import sun from '@fortawesome/fontawesome-free/svgs/regular/sun.svg'
import moon from '@fortawesome/fontawesome-free/svgs/regular/moon.svg'
import {ReactSVG} from "react-svg";

export const Header = ({dark, toggleTheme}) => (
  <Container fluid className="p-0">
    <div className="header-icons-container">
      <div className="header-icons">
        <a target="_empty" href="https://github.com/GavinF17/reactstrap-form-validator">
          <ReactSVG className="mr-2" src={github}/>
        </a>
        <a target="_empty" href="https://www.npmjs.com/package/reactstrap-form-validator">
          <ReactSVG className="mr-2" src={npm}/>
        </a>
        {/*<img className="mr-2 float-left" src={dark ? moon : sun} alt="Toggle theme" onClick={toggleTheme}/>*/}
        {/*<svg className="mr-2 float-left"  xmlns={sun}/>*/}
        <ReactSVG className="float-left"  src={dark ? moon : sun} onClick={toggleTheme}/>
      </div>
    </div>

    <div id="header-banner" className="header-banner position-relative">
      <div className="far header-banner-bg"/>
      <div className="header-banner-text">
        Reactstrap Form Validation
      </div>
    </div>
  </Container>
);
