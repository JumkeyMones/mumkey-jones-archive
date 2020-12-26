import { Link, Redirect, useParams } from 'react-router-dom';
import Page from '../components/Page';
import { useWatchHistory } from '../components/Store';
import findById from '../utils/findById';

export default function Series({ archive }) {
  const { series_id } = useParams();
  const watchHistory = useWatchHistory();

  const series = findById(archive.series, series_id);

  if (!series) {
    return <Redirect to='/not-found' />;
  }

  const episodeTemplate = (e) => (
    <p key={e.id}>
      <Link to={`/${series_id}/${e.id}`}>{e.title}</Link>{' '}
      {findById(watchHistory, e.id) ? <span className='info'>watched</span> : null}
    </p>
  );

  return <Page pageTitle={series.title}>{series.episodes.map(episodeTemplate)}</Page>;
}
