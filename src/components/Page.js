import Navbar from './Navbar';
import { useState } from 'react';

function randomBanner() {
  const urls = [
    'https://i.kym-cdn.com/entries/icons/original/000/027/910/maxresdefault.jpg',
    'https://i.redd.it/463gf6p3ibt01.png',
    'https://m.media-amazon.com/images/M/MV5BMTM5ZGU0NTktMThiNy00YjBhLThhYTUtYzYwODFjN2NlOTRjXkEyXkFqcGdeQXVyNzMyNjk4NDA@._V1_.jpg',
    'https://static.tvtropes.org/pmwiki/pub/images/2_312.jpg',
    'https://i.redd.it/bs2vv49o5fj21.png',
    'https://static.tvtropes.org/pmwiki/pub/images/mumkey_jons.jpg',
  ];
  const index = Math.floor(Math.random() * urls.length);
  console.log(index);
  return `url(${urls[index]})`;
}

export default function Page({ pageTitle, children }) {
  const [banner, setBanner] = useState(randomBanner());

  return (
    <div className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-2'>
        <div className='pure-u-wrapper'>
          <Navbar />
          <div id='banner-wrapper'>
            <div
              id='banner'
              style={{ backgroundImage: banner }}
              onClick={() => setBanner(randomBanner())}
            ></div>
            <div id='banner-text-wrapper'>
              <span id='banner-text'>The Mumkey Jones Archive</span>
            </div>
          </div>

          <h1>{pageTitle}</h1>
          {children}
          <Navbar />
        </div>
      </div>
    </div>
  );
}
