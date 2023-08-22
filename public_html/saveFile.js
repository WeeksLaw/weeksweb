let saveFile = () => {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const comment = document.getElementById('subject');
          
    let data =
        '\r First Name: ' + fname.value + ' \r\n ' +
        'Last Name: ' + lname.value + '\r\n ' + 
        'Email: ' + email.value + '\r\n ' + 
        'Comment: ' + comment.value;
          
    const textToBLOB = new Blob([data], { type: 'text/pain' });
    const sFileName = 'formData.txt';
          
    let newLink = document.createElement("a");
    newLink.download = sFileName;
          
    if (window.webkitURL !== null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
          
    newLink.click();
          
};