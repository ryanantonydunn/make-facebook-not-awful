function walkTree(storageItems) {
  const tree = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    null
  );
  let node;
  while ((node = tree.nextNode())) {
    // get rid of suggested posts
    if (storageItems.suggested && node.nodeValue === "Suggested for you") {
      const el =
        node.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement;
      el.parentElement.removeChild(el);
    }

    // get rid of stories
    if (storageItems.stories && node.nodeValue === "Stories") {
      const el =
        node.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement;
      el.parentElement.removeChild(el);
    }

    // get rid of reels
    if (storageItems.stories && node.nodeValue === "Reels and short videos") {
      const el =
        node.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement;
      el.parentElement.removeChild(el);
    }
  }
}

function init(storageItems) {
  if (!storageItems.suggested && !storageItems.stories) {
    return;
  }
  const resizeObserver = new ResizeObserver((entries) => {
    walkTree(storageItems);
  });
  resizeObserver.observe(document.body);
  walkTree(storageItems);
}

// pass all sync storage values into function
window.onload = function () {
  chrome.storage.sync.get(null, (storageItems) => {
    init(storageItems);
  });
};
