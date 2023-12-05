
import { useEffect, useState } from 'react';

import { YandexLogin, YandexLogout } from 'react-yandex-login';
import './App.css'
 
const clientID = '294cef12f775494895b0bcb9aa51b9d8';

export const  App = () =>{
  const [userData, setUserData] = useState(null);

  const loginSuccess = (userData) => {
    console.log('User Data: ', userData);
    setUserData(userData)
  }
 
  const logoutSuccess = () => {
    setUserData(null);
  }
//@ts-ignore
  const sendMessageToApp = (userDataToSend) => {
    //@ts-ignore
    if (window.ReactNativeWebView) {
      //@ts-ignore
      window.ReactNativeWebView.postMessage(JSON.stringify(userDataToSend));
    }
  };

  useEffect(() => {
    sendMessageToApp(userData)
  }, [userData])

  const sampleData = {
    name: "Oleg",
    message: "Gde maket, oleg?",
    number: 420
  }

  return (
    <>
       <div>
      {!userData && 
      <>
      <button onClick={() => sendMessageToApp(sampleData)}>Send message to app</button>
        <YandexLogin clientID={clientID} onSuccess={loginSuccess}>
          <button>Yandex Login</button>
        </YandexLogin>
      </>
      }
      {userData &&
        <div>
          <YandexLogout onSuccess={logoutSuccess}>
            <button>Yandex Logout</button>
          </YandexLogout>
        </div>
      }
    </div>
    </>
  )
}
