$("#contact-button").on("click",function(event) {
    $("#contact-modal").css("display","block");
});

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

    console.log(contactRec);
});