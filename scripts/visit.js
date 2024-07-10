const vists = document.querySelector('.visits')

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    vists.textContent = numVisits
}
else {
    vists.textContent = `this is your first visit!`
}

numVisits++;

localStorage.setItem('visits-ls', numVisits)