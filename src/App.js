import React, { useCallback } from 'react';
import YandexAuth from './YandexAuth';
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

function  App (){
  const redirectUri = 'https://vladimirvalko.github.io/yandexTest/';

  const handleAuthSuccess = useCallback((data) => {
      console.log('Yandex auth successful:', data);
  }, []);

  const handleAuthError = useCallback((error) => {
      console.error('Yandex auth failed:', error);
  }, []);

  return (
      <YandexAuth
          clientId={clientID}
          redirectUri={redirectUri}
          onAuthSuccess={handleAuthSuccess}
          onAuthError={handleAuthError}
      />
  );
};


export default App