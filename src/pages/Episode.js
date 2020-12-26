import { useEffect, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import Page from '../components/Page';
import { watchHistoryManager } from '../components/Store';
import findById from '../utils/findById';

export default function Episode({ archive }) {
  const { series_id, episode_id } = useParams();
  const series = findById(archive.series, series_id);
  const episode = findById(series.episodes, episode_id);

  // Initially assume that the episode hasn't been watched
  const [watched, setWatched] = useState(false);
  const [progress, setProgress] = useState(0);

  // Try to load the episode from the db
  useEffect(() => {
    watchHistoryManager.get(episode_id).then((episode) => {
      if (episode) {
        setWatched(true);
        setProgress(episode.currentTime);
      }
    });
  }, [episode_id]);

  if (!episode) {
    return <Redirect to='/not-found' />;
  }

  async function removeFromWatchHistory() {
    await watchHistoryManager.remove(episode_id);
    setWatched(false);
  }

  async function saveCurrentTime(progress) {
    await watchHistoryManager.save(episode_id, progress);
    setWatched(true);
  }

  const src = episode.video.startsWith('http')
    ? episode.video + `#t=${progress}`
    : `https://ipfs.io/ipfs/${episode.video}`;

  return (
    <Page pageTitle={episode.title}>
      <nav>
        <Link to={`/${series.id}`}>{series.title}</Link>
      </nav>

      <video
        controls
        src={src}
        onPlay={() => saveCurrentTime(0)}
        onPause={(ev) => saveCurrentTime(ev.target.currentTime)}
      />

      {watched ? (
        <p className='info'>
          You've watched this episode.{' '}
          <button onClick={removeFromWatchHistory}>Remove from watch history</button>
        </p>
      ) : null}
    </Page>
  );
}
