export const setCookie = (data, days) => {
    const jsonString = JSON.stringify(data);
    const expDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = 'user=' + encodeURIComponent(jsonString) + '; expires' + expDate + '; path=/';
}

export const getCookie = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; user=`);
    if (parts.length === 2) {
        const jsonString = parts.pop().split(';').shift();
        return JSON.parse(decodeURIComponent(jsonString));
    }
    return {token:null}
}

export const deleteCookie = () => {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}
