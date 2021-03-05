function directLineAuth() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 5ulmoIo-WN8.hE8KwGu6Fzc2r3U1LHdP8jD2ZYhQWJmDHECDwh6aVjw");
    var resultJSON = {};
    var token;
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("https://directline.botframework.com/v3/directline/tokens/generate", requestOptions)
        .then(response => response.text())
        .then(result => {
            resultJSON = JSON.parse(result)
            token = resultJSON.token;
            return token;
        })
        .catch(error => console.log('error', error));

}
