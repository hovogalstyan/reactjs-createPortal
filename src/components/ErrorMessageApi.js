import React from 'react';

const ErrorMessageApi = ({message}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <h1 style={{
                fontStyle: '50px',
                position:'absolute',
                top:'0',
                bottom:'0',
                margin:'auto',
                maxHeight:'max-content',
                color: 'red',
                fontWeight: '700'
            }}>{message}</h1>
        </div>
    );
};

export default ErrorMessageApi;