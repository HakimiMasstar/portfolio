(function(){
    emailjs.init({
        publicKey: "BkQlCkmQW_5dSnNsj",
    });
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_9k4g42b';
    const templateID = 'template_8if62bc';

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            document.querySelector('.success').style.display = 'block';
            document.querySelector('.error').style.display = 'none';
            document.getElementById('contactForm').reset();
        }, error => {
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.success').style.display = 'none';
        });
});