async function manageService(service, action) {
    const response = await fetch(`/api/service/${service}/${action}`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
    loadServices(); // Odśwież listę po akcji
}

async function managePackage(package, action) {
    const response = await fetch(`/api/apt/${action}/${package}`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
}

async function loadServices() {
    const response = await fetch('/api/services');
    const data = await response.json();
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = ""; // Wyczyść listę przed dodaniem nowych elementów

    if (data.status === "success") {
        data.services.forEach(service => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${service.unit} - ${service.description} (${service.active}/${service.sub}) <button onclick="manageService('${service.unit}', 'start')">Start</button> <button onclick="manageService('${service.unit}', 'stop')">Stop</button> <button onclick="manageService('${service.unit}', 'restart')">Restart</button><button onclick="manageService('${service.unit}', 'status')">Status</button>`;
            servicesList.appendChild(listItem);
        });
    } else {
        servicesList.innerHTML = "<li>Błąd ładowania usług.</li>";
        console.error("Błąd pobierania listy usług:", data);
    }
}

window.onload = loadServices;