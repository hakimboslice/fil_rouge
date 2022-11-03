function mailing() {

    var messageBody = document.querySelector("#comment").value ;
    var messageObject = document.querySelector("#object_demande").value ;
   


    window.open(`mailto:Lesbobinesdebiche@gmail.com?&body=${messageBody}`);
    }