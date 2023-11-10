
function sendMail(event) {
    event.preventDefault();
  
      var params = {
        from_name : document.getElementById("fullName").value,
        email: document.getElementById("email_id").value,
        message: document.getElementById("reason").value,
      }
      
  
      emailjs.send("service_9fwzcnj", "template_li8ti1b", params)
      .then(res => {
        console.log(res)
        alert ("I will be in touch soon! "+ res.status);
        location.reload();
      
      }).catch(err => {console.error(err)});
  
  }
  
  document.querySelector('form').addEventListener('submit', sendMail);
  