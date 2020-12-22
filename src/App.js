import React from 'react';
import './App.css';

import { BrowserRouter, Route, Link, Switch, useParams, Redirect } from 'react-router-dom';

import archive from './archive/index.js';

/*
One-liner to grab episodes:

[...document.getElementsByTagName('a')].filter(a => a.href.endsWith('.ia.mp4')).map(a => `Episode("${a.innerText}", "${a.href}"),`).join('\n')

*/

const findByid = (array, id) => {
  return array.find((item) => item.id === id);
};

function Homepage() {
  const seriesTemplate = (s) => (
    <p key={s.id}>
      <Link to={`/${s.id}`}>{s.title}</Link>
    </p>
  );

  return (
    <div id='homepage-container' className='pure-u-wrapper'>
      <img
        id='logo'
        src='http://mumkeyjones.tv/wp-content/uploads/2018/12/Mumkey_Jones-300x300.png'
        alt='Mumkey Jones logo'
      />
      <h1>{archive.title}</h1>

      <hr />

      <p>Welcome to the Mumkey Jones Archive (.org edition)!</p>

      <p>
        All credits go to the <Link to='/credits'>folks</Link> who preserved the videos. This
        website is just a wrapper to make it easier to watch them.
      </p>

      <p>
        Unlike Susan, Archive.org does it for free, so please be patient if the videos start
        buffering.
      </p>

      <p>
        The source code for this website is
        <a href='https://github.com/JumkeyMones/mumkey-jones-archive'>on GitHub</a>.
      </p>

      <hr />

      {archive.series.map(seriesTemplate)}

      <p>More coming soon!™</p>
    </div>
  );
}

function Series() {
  const { series_id } = useParams();
  const series = findByid(archive.series, series_id);

  if (!series) {
    return <Redirect to='/not-found' />;
  }

  const episodeTemplate = (e) => (
    <p key={e.id}>
      <Link to={`/${series_id}/${e.id}`}>{e.title}</Link>
    </p>
  );

  return (
    <div id='series-container' className='pure-u-wrapper'>
      <nav>
        <Link to={`/`}>Home</Link> /
      </nav>

      <h1>{series.title}</h1>

      <hr />

      {series.episodes.map(episodeTemplate)}

      <hr />

      <nav>
        <Link to={`/`}>Home</Link> / {series.title}
      </nav>
    </div>
  );
}

function Episode() {
  console.log(useParams());
  const { series_id, episode_id } = useParams();
  const series = findByid(archive.series, series_id);
  const episode = findByid(series.episodes, episode_id);
  console.log({ series_id, episode_id });

  if (!episode) {
    return <Redirect to='/not-found' />;
  }

  const src = episode.video.startsWith('http')
    ? episode.video
    : `https://ipfs.io/ipfs/${episode.video}`;

  return (
    <div id='episode-container' className='pure-u-wrapper'>
      <nav>
        <Link to={`/`}>Home</Link> / <Link to={`/${series.id}`}>{series.title}</Link> /
      </nav>
      <h1>{episode.title}</h1>
      <hr />
      <video controls src={src} />
      <hr />
      <nav>
        <Link to={`/`}>Home</Link> / <Link to={`/${series.id}`}>{series.title}</Link> /{' '}
        {episode.title}
      </nav>
    </div>
  );
}

const Credits = () => (
  <div id='episode-container' className='pure-u-wrapper'>
    <h1>Credits</h1>
    <hr />
    <p>Boy, I sure hope someone got a promotion for this good work!</p>

    {[
      'https://mumkeyjones.tv/',
      'https://archive.org/details/mumkeyjones/',
      'https://archive.org/details/mumkeyjones2july2017/',
      'https://archive.org/details/REUPLOADMumkeysDeclassifiedLoveSurvivalGuide/',
    ].map((e) => (
      <p>
        <a href={e}>{e}</a>
      </p>
    ))}
    <hr />
    <nav>
      <Link to={`/`}>Home</Link>
    </nav>
  </div>
);

function App() {
  console.log(archive);
  return (
    <BrowserRouter>
      <div className='pure-g'>
        <div className='pure-u-1 pure-u-lg-1-2'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
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
              <Episode />
            </Route>

            <Route path='/:series_id'>
              <Series />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
