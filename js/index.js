const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const message = document.getElementById('message');





const submit = document.getElementsByClassName('form')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log("clicked");



    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>last Name: </h1>${lname.value}
     <br>
      <h1>email: </h1>${email.value}
    <br>
    <h1>message: </h1>${message.value}
    <br>
    `;

    Email.send({
        SecureToken: "242ff2d5-75e5-4326-bad6-a88acb8a57de  ", //add your token here
        To: 'himalayantechhub@gmail.com', // 
        From: "priyanshunegi3668@gmail.com",
        Subject: "This is the subject", + email.value,
        Body: ebody
    }).then(
        message => alert(message)
    );
});