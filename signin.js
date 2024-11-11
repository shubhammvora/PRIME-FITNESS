function saveLoginDetails(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Prepare the text content
    const userDetails = `Email: ${email}\nPassword: ${password}`;

    // Create a Blob from the text
    const blob = new Blob([userDetails], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'loginDetails.txt';  // Name of the file

    // Trigger the download
    link.click();
  }