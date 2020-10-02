import React from 'react';


import Selectors from '../Selectors';
import fish from '../../util/fish';
import bugs from '../../util/bugs';
import seaCreatures from '../../util/seacreatures';

function App() {
  return (
    <div className="container">
        <header className="row" id="header">
            <div className="col-3">
                <img src='/img/critter-logo@1.5x.png' alt="" className="logo-large" />
                <img src='/img/critter-logo.png' alt="" className="logo-small" />
            </div>
        </header>
        <Selectors bugs={bugs} fish={fish} sea={seaCreatures} />
        


        <footer className="row justify-content-center" id="footer">
            <div className="col-9">
              <p><a href="https://animal-crossing.com/">Animal Crossing</a> is a registered trademark of <a href="https://www.nintendo.com/">Nintendo</a>. ACNH-Critterpedia claims no ownership of any intellectual property associated with Animal Crossing
                and is in no way affiliated with Nintendo.
              </p>
              <p>App created by <a href="https://gh0start.com">Gh0stART</a>.</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
