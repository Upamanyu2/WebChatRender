function directLineAuth() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer hy2hBMa6H1A.E6NeR1EuzLrXP-qddjkjxsvo7txkQ7_319GvOqvykNY");
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
