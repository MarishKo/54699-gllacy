var feedbackLink = document.querySelector('.feedback-link'),
    feedbackModal = document.querySelector('.feedback'),
    feedbackClose = document.querySelector('.feedback .close'),
    feedbackName = feedbackModal.querySelector('[name="feedback-name"]'),
    feedbackMail = feedbackModal.querySelector('[name="feedback-email"]'),
    feedbackMessage = feedbackModal.querySelector('[name="feedback-message"]'),
    feedbackForm = feedbackModal.querySelector('form'),
    storageName = localStorage.getItem('name'),
    storageEmail = localStorage.getItem('mail'),
    inputText = document.querySelectorAll('.input-text');

feedbackLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackModal.classList.add('show');
    
    if (storageName) {
        feedbackName.value = storageName;
        feedbackName.classList.add('filled');
        if (storageEmail) {
            feedbackMail.value = storageEmail;
            feedbackMail.classList.add('filled');
            feedbackMessage.focus();
        } else{
            feedbackMail.focus();
        }
    } else{
        feedbackName.focus();
    }
    
});
feedbackClose.addEventListener('click', function() {
    feedbackModal.classList.remove('show');
    feedbackModal.classList.remove('error');
});
feedbackForm.addEventListener('submit', function(evt) {
    if(!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
        evt.preventDefault();
        feedbackModal.classList.remove('error');
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add('error');
    } else {
        localStorage.setItem('name', feedbackName.value);
        localStorage.setItem('mail', feedbackMail.value);
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if(feedbackModal.classList.contains('show')) {
            feedbackModal.classList.remove('show');
            feedbackModal.classList.remove('error');
        }
    }
});

inputText.forEach(function(element, index){
    element.addEventListener('focusout', function(evt){
        if (!element.value) {
            element.classList.remove('filled');
        }
    });
    element.addEventListener('input', function(evt){
        element.classList.add('filled');
    });
});