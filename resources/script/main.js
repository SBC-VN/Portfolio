$("#modal-close-x").on("click",function(event) {
    $("#contact-modal").css("display","none");
});

$("#modal-cancel").on("click",function(event) {
    $("#contact-modal").css("display","none");
});

$("#modal-submit").on("click",function(event) {
    let contactName = $("#modal-name-field").val();
    let contactEmail = $("#modal-email-field").val();
    let contactText = $("#modal-text-field").val();
    $("#contact-modal").css("display","none");
    let contactRec = {
        name: contactName,
        email: contactEmail,
        message: contactText
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/api/contact",
        data: contactRec 
      }).then(function(data) {
        console.log("API Contact response",data);
      });
});

$( document ).ready(function() {
    $("#contact-button").on("click",function(event) {
        $("#contact-modal").css("display","block");
    });
});