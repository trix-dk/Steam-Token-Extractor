document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'copyToken'}, function(response) {
        if (response && response.tokenValue) {
          const tokenValue = response.tokenValue.replace(/"/g, ""); // Remove quotation marks
          navigator.clipboard.writeText(tokenValue)
            .then(() => {
              console.log("Token copied to clipboard:", tokenValue);
            })
            .catch(error => {
              console.error("Failed to copy token:", error);
            });
        } else {
          console.error("Failed to retrieve token value from the webpage");
        }
      });
    });
  });
});
