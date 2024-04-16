chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'copyToken') {
      const tokenElement = document.querySelector("[data-loyalty_webapi_token]");
      const tokenValue = tokenElement ? tokenElement.getAttribute("data-loyalty_webapi_token") : null;
      sendResponse({ tokenValue: tokenValue });
    }
  });
  