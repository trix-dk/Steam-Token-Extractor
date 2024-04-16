chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: copyToken
    });
  });
  
  function copyToken() {
    const token = document.querySelector("[data-loyalty_webapi_token]");
    if (token) {
      const tokenValue = token.getAttribute("data-loyalty_webapi_token");
      navigator.clipboard.writeText(tokenValue)
        .then(() => {
          console.log("Token copied to clipboard:", tokenValue);
        })
        .catch(error => {
          console.error("Failed to copy token:", error);
        });
    } else {
      console.error("Token element not found");
    }
  }
  