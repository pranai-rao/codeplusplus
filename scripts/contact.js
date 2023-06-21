 var fullname = document.querySelector("#fullname"),
     email = document.querySelector("#email"),
     phone = document.querySelector("#phone-number")
     message = document.querySelector("#message");

 var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var subjectTemplate = "Code++ Support: Ticket "

 var oldHeight = 0;

function messageSizer() {
     if (oldHeight !== message.scrollHeight) {
         message.style.height = "auto";
         var newHeight = message.scrollHeight;
         message.style.height = newHeight.toString() + "px";
         oldHeight = newHeight;
     }
}

function sendEmail() {
    var subject = subjectTemplate.concat(ticketGenerator());
    Email.send({
        SecureToken : "8d8e7f20-ba99-4a00-8861-ce7af724f1e4", // The secure token of the registered smtpJS email
        To : 'pranai@rao.me', // The email that the ticket will be sent to (e.g., contact@codeplusplus.dev)
        From : "raospalace@gmail.com", // Should be a registered smtpJS email (e.g., noreply@codeplusplus.dev)
        Subject :  subject, // Will have a(n) (ideally unique) random ticket number appended to the subjectTemplate
        Body : "Name: " + fullname.value
            + "<br> Email: " + email.value
            + "<br> Phone number: " + phone.innerHTML
            + "<br> Message: " + message.value
    }).then(
        message => alert(message + "\n" + subject));
    Email.send({
        SecureToken : "8d8e7f20-ba99-4a00-8861-ce7af724f1e4", // The secure token of the registered smtpJS email
        To : email.value, // The email that the ticket will be sent to (e.g., contact@codeplusplus.dev)
        Bcc: ['pranai@rao.me', 'rayasam.maitreyi@gmail.com'], // The email of the employees/customer service team (same as 'To' field in first email)
        From : "raospalace@gmail.com", // Should be a registered smtpJS email (e.g., noreply@codeplusplus.dev)
        Subject :  subject, // Will have a(n) (ideally unique) random ticket number appended to the subjectTemplate
        Body : "Greetings from Code++!<br><br>" +
            "We wanted to let you know that we received your message and that our " +
            "customer service team will be getting back to you as soon as possible. If this is a question for your teacher " +
            "in an ongoing class, contact them directly for the fastest response. If this is an urgent request, please" +
            "note that we typically respond to requests within 1-2 business days.<br><br>" +
            "Here is the information we have for you. If any contact information is incorrect, please resubmit " +
            "the contact form immediately with the correct information. Additionally, please remember" +
            "to add the incorrect submission's ticket number, so we can get back to you as soon as possible.<br><br>" +
            "Name: " + fullname.value
            + "<br> Email: " + email.value
            + "<br> Phone number: " + phone.innerHTML
            + "<br> Message: " + message.value
            + "<br><br>--<br>The Code++ Team<br><a href='mailto:support@codeplusplus.dev'>support@codeplusplus.dev</a>"
            + "<br>Do not reply to <strong><em>this</em> email address.</strong> " +
            "A customer service representative will reply to this email within 1-2 business days. After the " +
            "representative has contacted you, you may reply directly to their email."
    }).then();
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