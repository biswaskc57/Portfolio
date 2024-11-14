import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const addGoogleTagManager = (gtmId: string | undefined) => {
  if (!gtmId) return;

  // Create script for Google Tag Manager
  const script = document.createElement('script');
  script.async = true;
  script.innerHTML = `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);

  // Add noscript fallback for Tag Manager
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscript);
};

// Run the function with the environment variable
addGoogleTagManager(process.env.REACT_APP_GTM_ID);

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
