document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "255719598739";

    let url = `https://wa.me/${whatsappNumber}?text=Maoni%20kutoka%20${name}:%0A%0A${message}`;

    window.open(url, "_blank");
});
