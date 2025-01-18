document.addEventListener("DOMContentLoaded", function () {
  const buttons = ["timeclock", "history", "profile", "register"];
  let activeButton = null;

  // Initialize Telegram WebApp
  if (window.Telegram) {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }

  const handleButtonClick = (buttonId, url) => {
    activeButton = buttonId;
    updateStyles();
    window.open(url, "_blank");
  };

  const updateStyles = () => {
    buttons.forEach((buttonId) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.className = getButtonStyles(buttonId);
        const icon = button.querySelector("i");
        const text = button.querySelector("span");
        if (icon) icon.className = getIconStyles(buttonId);
        if (text) text.className = getTextStyles(buttonId);
      }
    });
  };

  const getButtonStyles = (buttonId) => {
    const baseStyles = "p-4 text-center cursor-pointer transition duration-200";
    const isActive = activeButton === buttonId;
    return `${baseStyles} border-r ${isActive ? "bg-blue-600" : "bg-white hover:bg-gray-100"}`;
  };

  const getIconStyles = (buttonId) => {
    const isActive = activeButton === buttonId;
    return `text-${isActive ? "white" : "gray-600"}`;
  };

  const getTextStyles = (buttonId) => {
    const isActive = activeButton === buttonId;
    return `text-sm text-${isActive ? "white" : "gray-600"}`;
  };

  buttons.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const url = getUrlForButton(buttonId);
        handleButtonClick(buttonId, url);
      });
    }
  });

  const getUrlForButton = (buttonId) => {
    switch (buttonId) {
      case "timeclock":
        return "https://yoowattana.github.io/checkin.github.io";
      case "history":
        return "https://your-webhook-url.com/history";
      case "profile":
        return "https://your-webhook-url.com/profile";
      case "register":
        return "https://your-webhook-url.com/register";
      default:
        return "#";
    }
  };

  // Initialize Lucide icons
  lucide.createIcons();
});