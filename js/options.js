// suggested posts option
const toggleSuggested = document.getElementById("toggleSuggested");
chrome.storage.sync.get("suggested", function (data) {
  toggleSuggested.checked = data.suggested;
});
toggleSuggested.onchange = function (element) {
  chrome.storage.sync.set({ suggested: this.checked });
};

// stories and reels option
const toggleStories = document.getElementById("toggleStories");
chrome.storage.sync.get("stories", function (data) {
  toggleStories.checked = data.stories;
});
toggleStories.onchange = function (element) {
  chrome.storage.sync.set({ stories: this.checked });
};
