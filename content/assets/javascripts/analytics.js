(() => {
  // Set this to the Umami website ID to enable analytics collection.
  // The site is fully instrumented with data-umami-event attributes even while disabled.
  const websiteId = "";
  const scriptUrl = "https://cloud.umami.is/script.js";

  if (!websiteId) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = scriptUrl;
  script.dataset.websiteId = websiteId;
  script.dataset.autoTrack = "true";
  document.head.appendChild(script);
})();
