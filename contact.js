function mailing() {
    var userName=document.querySelector('#nom').value;
    var userFirstName=document.querySelector('#prenom').value;
    var titleMail = `Message de ${userName} ${userFirstName}`
    var phoneNumber = document.querySelector('#phone').value
    var comment = document.querySelector("#comment").value;
    var messageBody = `Mon numéro de téléphone : ${phoneNumber}%0A
    ${comment}`
     window.open(`mailto:lesbobinesdebiche@gmail.com?&subject=${titleMail}&body=${messageBody}`);
    }