import { useContext, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { StoreContext } from '../components/Store';
import findById from '../utils/findById';

export default function Episode({ archive }) {
  const { series_id, episode_id } = useParams();
  const [state, dispatch] = useContext(StoreContext);
  const [watched, setWatched] = useState(state.watchHistory.includes(episode_id));

  console.log(useParams());
  const series = findById(archive.series, series_id);
  const episode = findById(series.episodes, episode_id);
  console.log({ series_id, episode_id });

  function addToWatchHistory() {
    dispatch({ type: 'AddToWatchHistory', id: episode_id });
    setWatched(true);
  }

  function removeFromWatchHistory(e) {
    console.log(`Removing ${episode_id} from watch history`);
    dispatch({ type: 'RemoveFromWatchHistory', id: episode_id });
    console.log(state.watchHistory);
    setWatched(false);
  }

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
      <video controls src={src} onPlay={addToWatchHistory} />

      {watched ? (
        <p className='info'>
          You've watched this episode.{' '}
          <button onClick={removeFromWatchHistory}>Remove from watch history</button>
        </p>
      ) : null}

      <hr />
      <nav>
        <Link to={`/`}>Home</Link> / <Link to={`/${series.id}`}>{series.title}</Link> /{' '}
        {episode.title}
      </nav>
    </div>
  );
}
