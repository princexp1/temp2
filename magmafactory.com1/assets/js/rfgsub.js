var request  = new XMLHttpRequest()
function rfqsend (){
    var name = document.getElementById("name-1").value;
    var email = document.getElementById("email-1").value;
    var phone = document.getElementById("phone-1").value;
    var message = document.getElementById("message-1").value;
    var lop = document.getElementById("product-type-1");
    var dropdownValue = lop.options[lop.selectedIndex].text;
    var category = dropdownValue;
    let url = new URL("https://api.magmafactory.com/non-api/rfq");
    url.searchParams.append("key", config.key);
    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        console.log(this.responseText);
    }
    request.send(JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "category": category,
        "message": message
    }));
    alert("Thank you for your interest in Magma Factory. We will get back to you soon. \n\nRedirecting you to the home page, Click OK to continue.");
}