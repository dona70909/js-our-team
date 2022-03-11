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

const parent = document.getElementById("my-img-container");

// il for in non serve perchè qui la proprietà la prendo singolarmente 
for (let i = 0; i < team.length; i++){
    parent.innerHTML +=` 
    <div class="card my-card">
    <img class="card-img-top" src=img/${team[i].image}  alt="img member">
    <div class="card-body">
    <h5 class="card-title">${team[i].name}</h5>
    <p class="card-text">${team[i].role}</p>
    </div>
    </div>
    `;
}


function createMember(username,role,image){
    const newTeamMember = {
        name:username,
        role:role,
        image:image,
    }
    
    return newTeamMember;
} 


const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", function(){
    
    const nameNewMember = document.getElementById("user-name").value;
    const roleNewMember = document.getElementById("user-role").value;
    const imageNewMember = document.getElementById("user-url-image").value;
    const newTeamMember = createMember(nameNewMember,roleNewMember,imageNewMember);
    team.push(newTeamMember);
    
    parent.innerHTML += ` 
    <div class="card my-card">
    <img class="card-img-top" src=${imageNewMember}  alt="img member">
    <div class="card-body">
    <h5 class="card-title">${nameNewMember}</h5>
    <p class="card-text">${roleNewMember}</p>
    </div>
    </div>
    `;
    
});
