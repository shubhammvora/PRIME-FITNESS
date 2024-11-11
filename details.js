
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("optionModal");
    var submitBtn = document.getElementById("submitBtn");
    var closeModal = document.getElementsByClassName("close")[0];

    // Open modal when "Submit" button is clicked
    submitBtn.onclick = function() {
        // Add form validation logic here if necessary
        modal.style.display = "block";
    }

    // Close modal when the close button (x) is clicked
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal if user clicks outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("optionModal");
    var submitBtn = document.getElementById("submitBtn");
    var closeModal = document.getElementsByClassName("close")[0];

    // Open modal when "Submit" button is clicked
    submitBtn.onclick = function () {
        // Save the form data to a text file
        saveUserDetails();
        // Show the modal after saving
        modal.style.display = "block";
    };

    // Close modal when the close button (x) is clicked
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Close modal if user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Function to save form data into a text file
    function saveUserDetails() {
        // Get form data
        var gender = document.getElementById("gender").value;
        var age = document.getElementById("age").value;
        var heightFeet = document.getElementById("heightFeet").value;
        var weight = document.getElementById("weight").value;
        var focusArea = document.getElementById("focusArea").value;
        var exerciseCategory = document.getElementById("exerciseCategory").value;
        var targetWeight = document.getElementById("targetWeight").value;

        // Create a string to hold all the data
        var userDetails = `User Details:
Gender: ${gender}
Age: ${age}
Height (ft): ${heightFeet}
Weight (kg): ${weight}
Focus Area: ${focusArea}
Exercise Category: ${exerciseCategory}
Target Weight (kg): ${targetWeight}`;

        // Create a Blob object to hold the data
        var blob = new Blob([userDetails], { type: "text/plain" });

        // Create a download link
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "User_Details.txt";

        // Append the link to the body, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});


