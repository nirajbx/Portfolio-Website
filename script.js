function validation(){
    var fName = document.getElementById("fName").value;
    var pNumber = document.getElementById("pNumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    
    if(fName != fName.match(/[A-Za-z]{2,}/)){
        alert("Enter Proper Name")
    }

    else if(pNumber != pNumber.match(/[6-9]\d{9}/)){
        alert("Enter Proper Number")
    }

    else if(email != email.match(/[^A-Z]\w+@[a-z]+?\.[a-z]{2,3}/)){
        alert("Enter Proper Email")
    }
    else if(subject != subject.match(/.{2,30}/)){
        alert("Subject Must be between 2-20")
    }
    else{
        alert("Message Sent Successfully")
    }

console.log()
}

var  date = new Date();

document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = date.getMonth();
document.getElementById("year").innerHTML = date.getFullYear();

document.getElementById("date1").innerHTML = date.getDate();
document.getElementById("month1").innerHTML = date.getMonth();
document.getElementById("year1").innerHTML = date.getFullYear();

document.getElementById("date2").innerHTML = date.getDate();
document.getElementById("month2").innerHTML = date.getMonth();
document.getElementById("year2").innerHTML = date.getFullYear();

// function sendEmail(){
//     Email.send({
//         SecureToken:"f22139e3-e215-4bc2-8348-e348f6521267",
//         To : 'shoping.niraj@gmail.com',
//         From : document.getElementById("email").value,
//         Subject :"New Contact Form Enquiry",
//         Body : "Message: " + document.getElementById("ftxt2").value
//     }).then(
//       message => alert("Message Sent Successfully")
//     );
// }
