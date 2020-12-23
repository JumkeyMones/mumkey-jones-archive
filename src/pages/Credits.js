import { Link } from 'react-router-dom';

export default function Credits() {
  return (
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
}
