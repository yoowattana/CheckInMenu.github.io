document.addEventListener("DOMContentLoaded", function () {
    const buttons = ["timeclock", "history", "profile", "register"];
    let activeButton = null;

    const handleButtonClick = (buttonId, url) => {
        // Remove active class from all buttons
        buttons.forEach((id) => {
            const button = document.getElementById(id);
            if (button) {
                button.classList.remove("active");
            }
        });

        // Add active class to the clicked button
        const clickedButton = document.getElementById(buttonId);
        if (clickedButton) {
            clickedButton.classList.add("active");
        }

        // Open the URL in a new tab
        window.open(url, "_blank");
    };

    // Add click event listeners to buttons
    buttons.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => {
                const url = getUrlForButton(buttonId);
                handleButtonClick(buttonId, url);
            });
        }
    });

    // Function to get URL for each button
    const getUrlForButton = (buttonId) => {
        switch (buttonId) {
            case "timeclock":
                return "https://yoowattana.github.io/checkin.github.io";
            case "history":
                return "https://your-webhook-url.com/history";
            case "profile":
                return "https://your-webhook-url.com/profile";
            case "register":
                return "https://script.google.com/macros/s/AKfycbyJ3nqioqhhBqGtnOP_dvVTDm0-vuW4gN6Ey6oiCuA274yfAN5Qx-HjfaVoJYu4b46z/exec";
            default:
                return "#";
        }
    };
});
