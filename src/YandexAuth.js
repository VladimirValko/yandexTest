import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setToken } from './authSlice';

const YandexAuth = ({ setUserData }) => {
    const dispatch = useDispatch()

    const sendMessage = (message) => {
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }

    useEffect(() => {
        window.YaAuthSuggest.init(
         {
            client_id: '294cef12f775494895b0bcb9aa51b9d8',
            response_type: 'token',
            redirect_uri: 'https://vladimirvalko.github.io/yandexTest/'
         },
         'https://vladimirvalko.github.io/yandexTest/'
      )
      .then(({
         handler
      }) => handler())
      .then(data => console.log('Сообщение с токеном', data))
      .catch(error => console.log('Обработка ошибки', error));
      //   ({
      //       client_id: '294cef12f775494895b0bcb9aa51b9d8',
      //       response_type: 'token',
      //       redirect_uri: 'https://vladimirvalko.github.io/yandexTest/'
      //    },
      //    'https://vladimirvalko.github.io/yandexTest/', {
      //       view: 'button',
      //       parentId: 'container',
      //       buttonView: 'main',
      //       buttonTheme: 'light',
      //       buttonSize: 'm',
      //       buttonBorderRadius: 0
      //    }
      // )
      // .then(function(result) {
      //    sendMessage("lalalalal from webview number 1")
      //    return result.handler()

      // })
      // .then(function(data) {
      //    setUserData(data)
      //    sendMessage(data)
      //    alert(`${JSON.stringify(data)}`)
      //    sendMessage("lalalalal from webview number 2")
      // })
      // .catch(function(error) {
      //    console.log('Что-то пошло не так: ', error);
      //    alert('Что-то пошло не так: ', error);
      //    document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
      // });
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p>Yandex...</p>
        </div>
    );
};

export default YandexAuth;
