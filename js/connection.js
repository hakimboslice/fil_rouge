function subscribAndConnexion(){
    if (document.querySelector(".changement").textContent === "Inscription"){
        document.querySelector(".changement").textContent = "Connection"
    } else {document.querySelector(".changement").textContent = "Inscription" }
    document.querySelector("#hidden-subscribe").classList.toggle("hidden-subscribe");
    document.querySelector("#inscription").remove();
    if (document.querySelector(".changements").textContent === "Connection"){
        document.querySelector(".changements").textContent = "Inscription"
    } else {document.querySelector(".changements").textContent = "Connection" };
}