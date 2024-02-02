
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let parsedData = {};
    for(let name of formData) {
      if (typeof(parsedData[name[0]]) == "undefined") {
        let tempdata = formData.getAll(name[0]);
        if (tempdata.length > 1) {
          parsedData[name[0]] = tempdata;
        } else {
          parsedData[name[0]] = tempdata[0];
        }
      }
    }

    Email.send({
    SecureToken: "70633522-155e-4a78-addf-86ab8874d12a", //add your token here
    To: parsedData.email, // 
    From: "Himalayantechhub@gmail.com",
    Subject: parsedData.message,
    Body: parsedData.contact 
    }).then(
    message => alert(message)
    );
    console.log(parsedData.message)
});



// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const contact = document.getElementById('contact');
// const email = document.getElementById('email');
// const message = document.getElementById('message');





// const submit = document.getElementsByClassName('form')[0];

// submit.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log("submitted successfully");



//     let ebody = `
//     <h1>First Name: </h1>${fname.value}
//     <br>
//     <h1>last Name: </h1>${lname.value}
//      <br>
//       <h1>email: </h1>${email.value}
//     <br>
//     <h1>message: </h1>${message.value}
//     <br>
//     `;
    
//     // Email.send({
//     // SecureToken: "242ff2d5-75e5-4326-bad6-a88acb8a57de", //add your token here
//     // To: 'himalayantechhub@gmail.com', // 
//     // From: "himalayantechhub@gmail.com",
//     // Subject: "This is the subject" + email.value,
//     // Body: ebody
//     // }).then(
//     // message => alert(message)
//     // );
// });