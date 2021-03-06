const apiRoot = '';
import fetch from 'isomorphic-fetch'


const rxOne = /^[\],:{}\s]*$/;
const rxTwo = /\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g;
const rxThree = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g;
const rxFour = /(?:^|:|,)(?:\s*\[)+/g;
const isJSON = input => (
    input.length && rxOne.test(input.replace(rxTwo, '@')
        .replace(rxThree, ']')
        .replace(rxFour, ''))
);

export default async (endpoint,
                      method,
                      customHeader,
                      body) => {

    const defaultHeaders = {
        'Content-type': 'application/json;charset=utf-8',
    };

    const headers = Object.assign(customHeader, defaultHeaders);


    const fetchAPI = new Promise((resolve, reject) => {
        fetch(apiRoot + endpoint, {
            method,
            mode: 'cors',
            headers,
            body: JSON.stringify({ ...body }),
        }).then((response) => {
            if (response.ok) {
                response.text().then((text) => {
                    const json = isJSON(text) ? JSON.parse(text) : {};
                    resolve(json);
                });
            } else {
                response.text().then((text) => {
                    const json = isJSON(text) ? JSON.parse(text) : {};
                    reject({ status: response.status, body: json });
                });
            }
        }).catch((error) => {
            console.error('Fetch error:', error);
            reject(error);
        });
    });

    return Promise.race([
        fetchAPI,
        new Promise((resolve, reject) => {
            setTimeout(() => {
                setLoading(false);
                reject('time out');
            }, 5000);
        }),
    ]);
};

const apiGET = async (url) => {

    const fetchAPI = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
        }).then((response) => {
            if (response.ok) {
                response.text().then((text) => {
                    const json = isJSON(text) ? JSON.parse(text) : {};
                    // console.log('Fetch response :', json);
                    resolve(json);
                });
            } else {
                response.text().then((text) => {
                    console.warn('Fetch Error:', text);
                    const json = isJSON(text) ? JSON.parse(text) : {};
                    reject({ status: response.status, body: json });
                });
            }
        }).catch((error) => {
            console.error('Fetch error:', error);
            reject(error);
        });
    });

    return Promise.race([
        fetchAPI,
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('time out');
            }, 5000);
        }),
    ]);
};

export {
    apiGET,
};
