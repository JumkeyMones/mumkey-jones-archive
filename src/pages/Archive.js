import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { useWatchHistory } from '../components/Store';
import findById from '../utils/findById';

export default function Homepage({ archive }) {
  const watchHistory = useWatchHistory();

  const seriesTemplate = (s) => {
    const episodeCount = s.episodes.length;
    const watchedCount = s.episodes.reduce((total, episode) => {
      total += findById(watchHistory, episode.id) ? 1 : 0;
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
    <Page pageTitle='Archive'>
      {archive.series.map(seriesTemplate)}
      <p>More coming soon!™</p>
    </Page>
  );
}
