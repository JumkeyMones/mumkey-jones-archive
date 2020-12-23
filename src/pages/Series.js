import { useContext } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { StoreContext } from '../components/Store';
import findById from '../utils/findById';

export default function Series({ archive }) {
  const { series_id } = useParams();
  const [state] = useContext(StoreContext);

  const series = findById(archive.series, series_id);

  if (!series) {
    return <Redirect to='/not-found' />;
  }

  const episodeTemplate = (e) => (
    <p key={e.id}>
      <Link to={`/${series_id}/${e.id}`}>{e.title}</Link>{' '}
      {state.watchHistory.includes(e.id) ? <span className='info'>watched</span> : null}
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
