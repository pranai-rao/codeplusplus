 var fullname = document.querySelector("#fullname"),
    email = document.querySelector("#email"),
    phone = document.querySelector("#phone"),
    message = document.querySelector("#message");

 var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var subjectTemplate = "Code++ Support: Ticket "


function sendEmail() {
    var subject = subjectTemplate.concat(ticketGenerator());
    window.alert(subject);
    Email.send({
        SecureToken : "8d8e7f20-ba99-4a00-8861-ce7af724f1e4", // The secure token of the registered smtpJS email
        To : 'pranai@rao.me', // The email that the ticket will be sent to (e.g., contact@codeplusplus.dev)
        From : "raospalace@gmail.com", // Should be a registered smtpJS email (e.g., noreply@codeplusplus.dev)
        Subject :  subject, // Will have a(n) (ideally unique) random ticket number appended to the subjectTemplate
        Body : "Name: " + fullname.value
            + "<br> Email: " + email.value
            + "<br> Phone: " + phone.value
            + "<br> Message: " + message.value
    }).then(
        message => alert(message)
    );
}

function ticketGenerator() {
    var ticket = "#";

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    function getRndAlphabet(charID) {
        return alphabet.charAt(charID);
    }

    function alphanumGenerator() {
        if (getRndInteger(0, 3) === 0) {
            return getRndAlphabet(getRndInteger(0, 26));
        }
        else {
            return getRndInteger(0, 10);
        }
    }

    for (var i = 0; i < 10; i++) {
        if (i === 5) {ticket = ticket.concat("-");}
        ticket = ticket.concat(alphanumGenerator());
    }
    return ticket;
}