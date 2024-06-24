
function getThisYear() {
    return new Date().getFullYear();
}

function lastModDate() {
    return new Date(document.lastModified);
}

function update() {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = getThisYear();
    }
}

function updateLastMod() {
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        const lastMod = lastModDate();
        lastMod.textContent = "Last Modified: " + lastMod.toLocalString();
    }
}

update();
updateLastMod();