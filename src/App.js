import React, { useCallback } from 'react';
import YandexAuth from './YandexAuth';
import { useSelector } from 'react-redux'
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

function  App (){
  const redirectUri = 'https://vladimirvalko.github.io/yandexTest/';

  const token = useSelector((state) => state?.auth?.token)

  const handleAuthSuccess = useCallback((data) => {
    alert('Yandex auth successful:', JSON.stringify(data));
  }, []);

  const handleAuthError = useCallback((error) => {
    alert('Yandex auth failed:', JSON.stringify(error));
  }, []);

  return (
    <>
    <div><p>token is {token}.</p></div>
      <YandexAuth
        clientId={clientID}
        redirectUri={redirectUri}
        onAuthSuccess={handleAuthSuccess}
        onAuthError={handleAuthError}
      />
    </>
  );
};


export default App