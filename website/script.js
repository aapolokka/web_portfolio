function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://2vbkuod2k5v43uztsrsixdqkqq0jxyeq.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Copyright &#169; 2023 Aapo Lokka. All Rights Reserved. pieni testi | Total views: ${data}`;
}
updateCounter();