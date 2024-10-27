const displayText = document.querySelector(".displayBox .text p");
const listItems = document.querySelectorAll(".listBox ul li");
const next1Button = document.querySelector("#next1");
const next2Button = document.querySelector("#next2");
const submitButton = document.querySelector("#submitBtn");
const userNameMail = document.getElementById("userNameMail");
const verification = document.getElementById("verification");
const checkbox = document.getElementById("checkbox");
const forms = document.querySelectorAll(".banner .card .container");
const userName = document.querySelector(".userName");
const followerAmount = document.querySelector(".followAmount");

let selectedItem = null;
const userDtls = {};

// Function to display a specific form step
function showFormStep(stepIndex) {
    forms.forEach((form, index) => {
        form.style.display = index === stepIndex ? "flex" : "none";
    });
}

// Move to form 2
next1Button.addEventListener("click", () => {
    const userInput = userNameMail.value.trim();

    if (userInput === "") {
        alert("Please fill in the form first");
    }
    // else if (userInput !== "userN" && userInput !== "user@gmail.com") {
    //     alert("Your input information is not correct");
    // }
    else if (!checkbox.checked) {
        alert("Please check the checkbox.");
    } else {
        userDtls.name = userInput;  // Store username/email in userDtls
        showFormStep(1);            // Show form 2
    }
});

// Item selection in form 2
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove "selected" from all items and apply to the clicked one
        listItems.forEach((li) => li.classList.remove("selected"));
        item.classList.add("selected");

        // Update selected item and display box text
        selectedItem = item.querySelector(".amount").textContent;
        displayText.textContent = `${selectedItem}k followers`;
    });
});

// Move to form 3
next2Button.addEventListener("click", () => {
    if (selectedItem === null) {
        alert("Please select one item at least");
    } else {
        userDtls.followersAmount = selectedItem;
        showFormStep(2);
        console.log(selectedItem)
        console.log(userDtls)
        userName.innerHTML = userDtls.name;
        followerAmount.innerHTML = userDtls.followersAmount;
        console.log(followerAmount,userName)
    }
});


submitButton.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    const verificationCode = verification.value.trim();
    
    if (verificationCode === "") {
        alert('Please input the verification code');
    } else {
        // Form can be submitted
        alert('successfully submited');
    }
});


// Output user details to console (Optional)
console.log("userDtls:", userDtls);
