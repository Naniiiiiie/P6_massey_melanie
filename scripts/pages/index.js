// Récupération des données photographeurs et les rendre exploitable
async function getPhotographers() {
    const resultat = await fetch ("./data/photographers.json")
    const photographers = await resultat.json()
    return photographers
}

// Fonction qui va afficher les profils photographeurs sur la page index.html
async function displayData(photographers) {
    // Constante qui associe la partie .photographer_section de index.html
    const photographersSection = document.querySelector(".photographer_section");
    // Je créé une variable i pour me permettre de construire les liens URL menant à chaque photographe 
    let i = 0;

    photographers.forEach((photographer) => {
        // Je passe un deuxième paramètre i
        const photographerModel = new Photographer(photographer, i); 

        // Mise en forme de chaque photographe dans la page
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        i++;
        //console.log(photographers)
    });
}

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers.photographers);
}

init();
    