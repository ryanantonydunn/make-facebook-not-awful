chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ suggested: true, stories: true });
});
