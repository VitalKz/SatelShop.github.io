window.sessionStorageHelper = {
    getItem: function (key) {
        return sessionStorage.getItem(key);
    },
    setItem: function (key, value) {
        sessionStorage.setItem(key, value);
    }
};
