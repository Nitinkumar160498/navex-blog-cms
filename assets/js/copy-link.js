document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#copy-link-button");
  const status = document.querySelector("#copy-link-status");

  if (!button || !status) return;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      status.textContent = "Article link copied!";
    } catch {
      status.textContent =
        "Unable to copy automatically. Please copy the URL from your browser.";
    }
  });
});
