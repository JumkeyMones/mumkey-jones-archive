import Page from '../components/Page';

export default function AboutMumkey() {
  return (
    <Page pageTitle='About Mumkey'>
      <p>Mumkey's current YouTube accounts are:</p>

      <ul>
        <li>
          <a href='https://www.youtube.com/c/MumkeysCountdownToDemonetization'>Simian Jimmy</a>{' '}
          <span className='info'>Main channel.</span>
        </li>

        <li>
          <a href='https://www.youtube.com/channel/UCWyQ7hA22F1N5fADjeZ_Cvg'>
            The Mumkey & Bigs Show
          </a>{' '}
          <span className='info'>
            Gaming videos, talk show with Bigs, new "Is It Kino?" episodes.
          </span>
        </li>
      </ul>

      <h2>Mumkey's social media</h2>

      <ul>
        <li>
          Twitter: <a href='https://twitter.com/SimianJimmy'>@SimianJimmy</a>
        </li>
        <li>
          Instagram: <a href='https://www.instagram.com/mumkeyjonestv/'>mumkeyjonestv</a>
        </li>
      </ul>
      <h2>Support Mumkey</h2>
      <ul>
        <li>
          Patreon: <a href='https://www.patreon.com/mumkey'>Mumkey</a>
        </li>
        <li>
          Etsy:{' '}
          <a href='https://www.etsy.com/listing/600782772/the-triflers-e-book'>The Triflers</a>
        </li>
        <li>
          Teespring: <a href='https://teespring.com/stores/mumkey-store'>Mumkey Store</a>
        </li>
      </ul>
    </Page>
  );
}
