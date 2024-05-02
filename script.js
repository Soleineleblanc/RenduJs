let Entreprise = [];
let Instruments = [];
let Services = [];
let Temoignages = [];

fetchEntreprise();
/*
function renderEntreprise() {
    const entreprise = document.getElementById('titre');
    entreprise.innerHTML = '';

    Entreprise.forEach(Entreprise => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.nomCommercial} ${contact.phraseAccroche} - ${contact.texteAppelAction} - ${contact.avantagesClients}`;
        contactList.appendChild(listItem);
    });
}
*/
function fetchEntreprise() {
    fetch('musicHalle.json')
        .then(response => response.json())
        .then(data => {
            contacts = data;
            //renderEntreprise();
            const Titre = document.getElementById('titre');
            document.getElementById('titre').innerHTML =  data.entreprise.nomCommercial;

            const sousTitre = document.getElementById('phraseAccroche');
            document.getElementById('phraseAccroche').innerHTML =  data.entreprise.phraseAccroche;
            
            const button = document.getElementById('button');
            document.getElementById('button').innerHTML =  data.entreprise.texteAppelAction;

            const avantagesClientsUL = document.getElementById('avantageClients');

            let avantageClient = data.entreprise.avantagesClients;
            console.log(avantageClient);
            console.log(avantagesClientsUL);
            avantageClient.forEach(element => {
                //console.log(element);
                const li= document.createElement('li');
                li.textContent = element;
                avantagesClientsUL.appendChild(li);
            });
            //console.log(fetchEntreprise);

            const produitDiv = document.getElementById('produitDiv');
            //document.body.appendChild(produitDiv);

            let produits = data.entreprise.produits;
            console.log(produits);
            console.log(produitDiv);
            produits.forEach(element => {
                //console.log(element);
                const li= document.createElement('li');
                produitDiv.appendChild(li);
                const h3= document.createElement('h3');
                h3.textContent = element.nom;
                li.appendChild(h3);
                const phara= document.createElement('p');
                phara.textContent = element.description;
                li.appendChild(phara);
                const image= document.createElement('img');
                image.setAttribute("src", element.image);
                li.appendChild(image);

            });
            const servicesDiv = document.getElementById('servicesDiv');
            //document.body.appendChild(servicesDiv);

            let services = data.entreprise.services;
            console.log(services);
            console.log(servicesDiv);
            services.forEach(element => {
                //console.log(element);
                const li= document.createElement('li');
                servicesDiv.appendChild(li);
                const h3= document.createElement('h3');
                h3.textContent = element.nom;
                li.appendChild(h3);
                const phara= document.createElement('p');
                phara.textContent = element.description;
                li.appendChild(phara);  

            });

            const temoignagesDiv = document.getElementById('temoignagesDiv');
            //document.body.appendChild(temoignagesDiv);

            let temoignages = data.entreprise.temoignages;
            console.log(temoignages);
            console.log(temoignagesDiv);
            temoignages.forEach(element => {
                //console.log(element);
                const li= document.createElement('li');
                temoignagesDiv.appendChild(li);
                const h3= document.createElement('h3');
                h3.textContent = element.prenom;
                li.appendChild(h3);
                const phara= document.createElement('p');
                phara.textContent = element.typeExperience;
                li.appendChild(phara);
                const phara2= document.createElement('p');
                phara2.textContent = element.commentaire;
                li.appendChild(phara2);

            });

        })
}