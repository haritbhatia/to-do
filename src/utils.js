const Utils = {
    formatDateTime: (date) => {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        let dateValue = (date.getDate() > 9) ? date.getDate() : "0" + date.getDate();
        let hours = (date.getHours() + 1 > 9) ? date.getHours() : "0" + date.getHours();
        let minutes = (date.getMinutes() + 1 > 9) ? date.getMinutes() : "0" + date.getMinutes();
        return year + '-' + month + '-' + dateValue + 'T' + hours + ":" + minutes;
    }
}

export default Utils;