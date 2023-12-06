import React, { useCallback } from 'react';
import YandexAuth from './YandexAuth';
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

function  App (){
  const redirectUri = 'https://vladimirvalko.github.io/yandexTest/';

  const handleAuthSuccess = useCallback((data) => {
    alert('Yandex auth successful:', JSON.stringify(data));
  }, []);

  const handleAuthError = useCallback((error) => {
    alert('Yandex auth failed:', error);
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