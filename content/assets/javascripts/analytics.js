(() => {
  const websiteId = "54cea9a5-0f45-49cd-839e-7a4229e766f3";
  const scriptUrl = "https://cloud.umami.is/script.js";

  const script = document.createElement("script");
  script.defer = true;
  script.src = scriptUrl;
  script.dataset.websiteId = websiteId;
  script.dataset.autoTrack = "true";
  document.head.appendChild(script);
})();
