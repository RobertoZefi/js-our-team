let img = [
    './img/wayne-barnett-founder-ceo.jpg',
    './img/angela-caroll-chief-editor.jpg',
    './img/walter-gordon-office-manager.jpg',
    './img/angela-lopez-social-media-manager.jpg',
    './img/scott-estrada-developer.jpg',
    './img/barbara-ramos-graphic-designer.jpg',
]

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: `<img src="${img[0]}" alt="">`
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: `<img src="${img[1]}" alt="">`
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Founder & CEO',
        foto: `<img src="${img[2]}" alt="">`
    },
    
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: `<img src="${img[3]}" alt="">`
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: `<img src="${img[4]}" alt="">`
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: `<img src="${img[5]}" alt="">`
    }
]

const divString = document.getElementById('string')

for (let key in team){
    let teamPerson = team[key]
    console.log(teamPerson)

    let nome = teamPerson.nome
    let ruolo = teamPerson.ruolo
    let foto = teamPerson.foto
    console.log(nome, ruolo, foto)

    let string = `
        <div class="card">
            ${foto} 
            <div class="card__description">
                <h2 class="name">${nome} </h2>
                <p class="ruolo">${ruolo}</p>
            </div>
        </div>
    `
    console.log(string)
    divString.innerHTML += string
}


