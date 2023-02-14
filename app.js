const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Founder & CEO',
        foto: 'img'
    },
    
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img'
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
        <div>${nome}, ${ruolo}, ${foto}</div>
    `

    divString.innerHTML += string
}