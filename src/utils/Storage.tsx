const Storage = {
    get: (key: string) => {
        let output = [];
        try {
            output = JSON.parse(localStorage.getItem(key) || '[]');
        } catch (e) {
            localStorage.setItem(key, '[]');
        }
        return output;
    },
    set: (key: string, value: any) => {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

export default Storage;