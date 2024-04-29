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
            const Titre = document.getElementById('titre').innerHTML;
            document.getElementById('titre').innerHTML =  data.entreprise.nomCommercial;

            const sousTitre = document.getElementById('phraseAccroche').innerHTML;
            document.getElementById('phraseAccroche').innerHTML =  data.entreprise.phraseAccroche;
            
            const button = document.getElementById('button').innerHTML;
            document.getElementById('button').innerHTML =  data.entreprise.exteAppelAction;

            const avantagesClients = document.getElementById('avantagesClients').innerHTML;
            let avantageClient = data.entreprise.avantagesClients;
            console.log(avantageClient);
            avantageClient.forEach(element => {
                console.log(element);
                const li= document.createElement('li');
                li.textContent = element;
                avantagesClients.appendChild(li);
            });
            console.log(fetchEntreprise);

        })
}