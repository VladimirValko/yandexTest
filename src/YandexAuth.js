import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from './authSlice';

const YandexAuth = ({ clientId, redirectUri, onAuthSuccess, onAuthError }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.YaAuthSuggest.init({
            client_id: '294cef12f775494895b0bcb9aa51b9d8',
            response_type: 'token',
            redirect_uri: 'https://vladimirvalko.github.io/yandexTest/'
         },
         'https://vladimirvalko.github.io/yandexTest/', {
            view: 'button',
            parentId: 'container',
            buttonView: 'main',
            buttonTheme: 'light',
            buttonSize: 'm',
            buttonBorderRadius: 0
         }
      )
      .then(function(result) {
         return result.handler?.()
      })
      .then(function(data) {
         console.log('Сообщение с токеном: ', data);
         alert('Сообщение с токеном: ', data);
         setToken(data)
         document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
      })
      .catch(function(error) {
         console.log('Что-то пошло не так: ', error);
         alert('Что-то пошло не так: ', error);
         document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
      });
    }, [clientId, redirectUri, onAuthSuccess, onAuthError]);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p>Yandex...</p>
        </div>
    );
};

export default YandexAuth;
