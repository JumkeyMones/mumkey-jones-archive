import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../components/Store';

export default function Homepage({ archive }) {
  const [state] = useContext(StoreContext);

  const seriesTemplate = (s) => {
    const episodeCount = s.episodes.length;
    const watchedCount = s.episodes.reduce((total, episode) => {
      total += state.watchHistory.includes(episode.id) ? 1 : 0;
      return total;
    }, 0);

    return (
      <p key={s.id}>
        <Link to={`/${s.id}`}>{s.title}</Link>{' '}
        <span className='info'>
          {watchedCount ? (
            <>
              {watchedCount}/{episodeCount} episodes
            </>
          ) : (
            <>{episodeCount} episodes</>
          )}
        </span>
      </p>
    );
  };

  return (
    <div id='homepage-container' className='pure-u-wrapper'>
      <img id='logo' src='/logo512.png' alt='Mumkey Jones logo' />
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
        The <a href='https://github.com/JumkeyMones/mumkey-jones-archive'>source code</a> for this
        website is available on GitHub.
      </p>

      <hr />

      {archive.series.map(seriesTemplate)}

      <p>More coming soon!™</p>
    </div>
  );
}
