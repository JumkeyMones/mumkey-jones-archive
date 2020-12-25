import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import archive from './archive/index.js';
import { Store } from './components/Store';
import AboutMumkey from './pages/AboutMumkey';
import Archive from './pages/Archive';
import Credits from './pages/Credits';
import Episode from './pages/Episode';
import Homepage from './pages/Homepage';
import Series from './pages/Series';

/*
One-liner to grab episodes:

[...document.getElementsByTagName('a')].filter(a => a.href.endsWith('.ia.mp4')).map(a => `Episode("${a.innerText}", "${a.href}"),`).join('\n')
*/

function dumpArchive() {
  const urls = [];
  for (const s of archive.series) {
    for (const e of s.episodes) {
      urls.push(e.video);
    }
  }
  console.log(urls);
  console.log(archive);
}

function App() {
  dumpArchive();

  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route path='/archive'>
            <Archive archive={archive} />
          </Route>

          <Route path='/about-mumkey'>
            <AboutMumkey />
          </Route>

          <Route path='/credits'>
            <Credits />
          </Route>

          <Route path='/not-found'>
            <div className='pure-u-wrapper'>
              <h1>Not found!</h1>
              <hr />
              <p>
                <Link to='/'>Go home</Link>.
              </p>
            </div>
          </Route>

          <Route path='/:series_id/:episode_id'>
            <Episode archive={archive} />
          </Route>

          <Route path='/:series_id'>
            <Series archive={archive} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
