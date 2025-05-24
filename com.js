function sendMail(params){
    var temparams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('service_7n9fpyu','template_lku2dpb',temparams)
    .then(function(res){
        alert("Message has been sent");
        console.log("success", res.status);
    })
}


