const displayText = document.querySelector(".displayBox .text p");
const listItems = document.querySelectorAll(".listBox ul li");
const next1Button = document.querySelector("#next1");
const next2Button = document.querySelector("#next2");
let selectedItem = null;
const userNameMail = document.getElementById("userNameMail");

// Move to form 2
next1Button.addEventListener("click", () => {
    if (userNameMail.value.trim() === "") { // Check the value of userNameMail input
        alert("Please fill in the form first");
    } else if (userNameMail.value.trim() !== "userN" && userNameMail.value.trim() !== "user@gmail.com") {
        alert("Your input information is not correct");
    } else {
        console.log(userNameMail.value);
        
        // Show only form 2 and hide others
        const forms = document.querySelectorAll(".banner .card form");
        forms.forEach((form, index) => {
            form.style.display = index === 1 ? "flex" : "none"; // Display form 2 only
        });
    }
});

// Item selection in form 2
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove "selected" from all items
        listItems.forEach((li) => li.classList.remove("selected"));

        // Update selected item and apply "selected" class
        selectedItem = item;
        item.classList.add("selected");

        // Update display box with selected item text
        const amountText = item.querySelector(".amount").textContent;
        displayText.textContent = `${amountText}k followers`;
    });
});

// Move to form 3
next2Button.addEventListener("click", () => {
    if (selectedItem === null) {
        alert("Please select one item at least");
    } else {
        // Show only form 3 and hide others
        const forms = document.querySelectorAll(".banner .card form");
        forms.forEach((form, index) => {
            form.style.display = index === 2 ? "flex" : "none"; // Display form 3 only
        });
    }
});
