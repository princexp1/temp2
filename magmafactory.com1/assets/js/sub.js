var request  = new XMLHttpRequest()
function getEmail () {
    var email = document.getElementById('get-email').value;
    if (email === "") {
        alert('Please enter your email');
    }
    else {
        var url = "https://api.magmafactory.com/non-api/scribe/"+email+"?key=" + config.key;
        request.open('GET', url, true)
        request.send()
        alert('Thank you for Subscribing!');
    }
}