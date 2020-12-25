import { Link } from 'react-router-dom';
import Page from '../components/Page';

export default function Homepage() {
  return (
    <Page pageTitle='The Mumkey Jones Archive'>
      <img id='logo' src='/logo512.png' alt='Mumkey Jones logo' />

      <p>Welcome to the Mumkey Jones Archive (.org edition)!</p>
      <p>
        This is a fan-run archive, and a companion/spiritual successor to Mumkey's own site,{' '}
        <a href='https://mumkeyjones.tv'>MumkeyJones.tv</a>.
      </p>
      <p>
        Backups of Mumkey's videos have been uploaded to the Internet Archive. This website acts as
        a simple, unified way to watch them, with some additional quality-of-life improvements
        (watch history, etc...).
      </p>
      <p>
        Unlike Susan, Archive.org does it for free, so please be patient if the videos start
        buffering!
      </p>
      <p>
        If you don't know where to start, the <em>Mumkey Condensed Experience</em> in the{' '}
        <Link to='/archive'>archive</Link> includes all the major Mumkey videos in chronological
        order.
      </p>

      <h2>Want to help?</h2>
      <p>
        To support the man, the monkey, the legend, see <Link to='/about-mumkey'>about Mumkey</Link>
        .
      </p>
      <p>
        To get in touch with the archive maintainers, check the <Link to='/credits'>credits</Link>{' '}
        page.
      </p>
      <p>
        There is a list of <a href='https://pastebin.com/fdR8HYsi'>missing episodes</a>, send a mail
        to <a href='mailto:mumkeyjonesarchive@icloud.com'>mumkeyjonesarchive@icloud.com</a> if you
        have any information about them.
      </p>
      <p>
        The <a href='https://github.com/JumkeyMones/mumkey-jones-archive'>source code</a> for this
        website is available on GitHub.
      </p>
    </Page>
  );
}
