import React, { useCallback, useState } from 'react';
import YandexAuth from './YandexAuth';
import { useSelector } from 'react-redux'
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

function  App (){
  const [userData, setUserData] = useState(null)
  const redirectUri = 'https://vladimirvalko.github.io/yandexTest/';

  // TODO попробовать завязать юзэффект на токене и прокидывать сообщение
  // в приложение по изменению токена
  // токен можно попробовать достать из урла
  const token = useSelector((state) => state?.auth?.token)

  const handleAuthSuccess = useCallback((data) => {
    alert('Yandex auth successful:', JSON.stringify(data));
  }, []);

  const handleAuthError = useCallback((error) => {
    alert('Yandex auth failed:', JSON.stringify(error));
  }, []);

  return (
    <>
    <div><p>token is {JSON.stringify(userData)}.</p></div>
      <YandexAuth
        clientId={clientID}
        redirectUri={redirectUri}
        onAuthSuccess={handleAuthSuccess}
        onAuthError={handleAuthError}
        setUserData={setUserData}
        userData={userData}
      />
    </>
  );
};


export default App