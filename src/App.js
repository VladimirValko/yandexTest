import React, { useCallback, useState } from 'react';
import YandexAuth from './YandexAuth';
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

function  App (){
  const [error, setError] = useState("")
  const [userData, setUserData] = useState(null)
  const redirectUri = 'https://vladimirvalko.github.io/yandexTest/';

  const handleAuthSuccess = useCallback((data) => {
    alert('Yandex auth successful:', JSON.stringify(data));
    setUserData(data)
  }, []);

  const handleAuthError = useCallback((error) => {
    alert('Yandex auth failed:', error);
    setError(error)
  }, []);

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, padding: 40 }}> 

    <div><p>error is{error}.</p></div>
    <div><p>data is{userData}.</p></div>
      </div>
      <YandexAuth
          clientId={clientID}
          redirectUri={redirectUri}
          onAuthSuccess={handleAuthSuccess}
          onAuthError={handleAuthError}
          />
    </div>
    </>
  );
};


export default App