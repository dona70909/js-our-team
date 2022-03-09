const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


for (let i = 0; i < team.length; i++){
    console.log("-------");
    for (const key in team[i]) {
        console.log(team[i][key]);
    }
}

for (let i = 0; i < team.length; i++){
    console.log("-------");
    for (const key in team[i]) {
        
        document.getElementById("my-img-container").innerHTML +=` 
        <div class="my-card">
            <img src=img/${team[i].image}  alt="img member">
            <p>${team[i].name}</p>
            <p>${team[i].role}</p>
        </div>
        `;
    
        
    }
}

