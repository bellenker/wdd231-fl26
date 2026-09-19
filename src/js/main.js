import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-title">${info.name}</a>
    <p class="hero-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.querySelector("head > title").textContent = parkData.fullName;

document.querySelector(".hero-banner > img").src = parkData.images[0].url;

document.querySelector(".hero-content").innerHTML = parkInfoTemplate(parkData);
