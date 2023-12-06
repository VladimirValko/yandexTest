import React, { useEffect } from 'react';

const YandexAuth = ({ clientId, redirectUri, onAuthSuccess, onAuthError }) => {
    useEffect(() => {
        window.YaAuthSuggest.init(
            {
                client_id: clientId,
                response_type: 'token',
                redirect_uri: redirectUri
            },
            'https://vladimirvalko.github.io/yandexTest/'
        )
        .then(data => {
        alert('Authentication success:', data);
            onAuthSuccess(data);
        })
        .catch(error => {
            alert('Authentication error:', error);
            onAuthError(error);
        });
    }, [clientId, redirectUri, onAuthSuccess, onAuthError]);

    return (
        <div style={{ justifyContent: "center", alignItems: "center" }}>
            <p>Yandex...</p>
        </div>
    );
};

export default YandexAuth;
