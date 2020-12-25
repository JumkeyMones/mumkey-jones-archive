import Navbar from './Navbar';

export default function Page({ pageTitle, children }) {
  return (
    <div className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-2'>
        <div className='pure-u-wrapper'>
          <Navbar />
          <h1>{pageTitle}</h1>
          {children}
          <Navbar />
        </div>
      </div>
    </div>
  );
}
