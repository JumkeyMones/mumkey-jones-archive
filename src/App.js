import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import archive from './archive/index.js';
import { Store, StoreContext } from './components/Store';
import Credits from './pages/Credits';
import Episode from './pages/Episode';
import Homepage from './pages/Homepage';
import Series from './pages/Series';

/*
One-liner to grab episodes:

[...document.getElementsByTagName('a')].filter(a => a.href.endsWith('.ia.mp4')).map(a => `Episode("${a.innerText}", "${a.href}"),`).join('\n')
*/

function App() {
  console.log(archive);
  return (
    <Store>
      <BrowserRouter>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-2'>
            <Switch>
              <Route exact path='/'>
                <Homepage context={StoreContext} archive={archive} />
              </Route>

              <Route exact path='/credits'>
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
                <Episode context={StoreContext} archive={archive} />
              </Route>

              <Route path='/:series_id'>
                <Series context={StoreContext} archive={archive} />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Store>
  );
}

export default App;
