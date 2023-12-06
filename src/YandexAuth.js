import React, { useEffect } from 'react';

const YandexAuth = ({ clientId, redirectUri, onAuthSuccess, onAuthError }) => {
    useEffect(() => {
        window.YaSendSuggestToken(
            'https://vladimirvalko.github.io/yandexTest/',
            {
               flag: true
            }
         )
        .then(data => {
        console.log('Authentication success:', data);
            onAuthSuccess(data);
        })
        .catch(error => {
            console.log('Authentication error:', error);
            onAuthError(error);
        });
    }, [clientId, redirectUri, onAuthSuccess, onAuthError]);

    return (
        <div style={{ justifyContent: "center", alignItems: "center" }}>
            <p>Authenticating with Yandex...</p>
        </div>
    );
};

export default YandexAuth;
