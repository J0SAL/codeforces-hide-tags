document.addEventListener("DOMContentLoaded", () => {
  const removeButton = document.getElementById("add-remove-button");

  // Get the active tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const url = currentTab.url;

    // Check if the URL contains "codeforces.com"
    if (url.includes("codeforces.com")) {
      // If the URL is correct, enable the button
      removeButton.disabled = false;
    } else {
      // Otherwise, disable the button
      removeButton.disabled = true;
      removeButton.textContent = "Not on codeforces.com"; // Optional: Change button text
    }
  });

  // Listen for button click and inject content script if the URL is valid
  removeButton.addEventListener("click", () => {
    if (!removeButton.disabled) {
      // Inject CSS and content script if the URL is valid
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;

        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["contentScript.js"],
        });
      });
    }
  });
});
