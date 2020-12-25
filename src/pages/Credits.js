import Page from '../components/Page';

export default function Credits() {
  return (
    <Page pageTitle='Credits'>
      <p>Boy, I sure hope someone got a promotion for this good work!</p>

      <h2>Maintainers</h2>

      <p>
        Archive: <a href='https://twitter.com/realUncleAlex'>@realUncleAlex</a>, aka Lyckra#1075 on
        Discord
      </p>

      <p>Website: Leaky Eyed Luca#4358 on Discord</p>

      <h2>Sources</h2>

      {[
        'https://mumkeyjones.tv/',
        'https://archive.org/details/mumkey-jones-condensed-experience',
        'https://archive.org/details/mumkeyjones/',
        'https://archive.org/details/mumkeyjones2july2017/',
        'https://archive.org/details/REUPLOADMumkeysDeclassifiedLoveSurvivalGuide/',
      ].map((e) => (
        <p>
          <a href={e}>{e}</a>
        </p>
      ))}
    </Page>
  );
}
