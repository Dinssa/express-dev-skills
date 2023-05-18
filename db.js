const { faker } = require('@faker-js/faker');

const team = [];

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'Express',
    'MongoDB',
    'SQL',
    'Python',
    'Django',
    'Flask',
    'PHP',
    'Laravel',
    'Ruby',
    'Rails',
    'C#',
    'ASP.NET'
];

for (let i = 0; i < 10; i++) {
    team.push({
        id: 1000 + i,
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        bio: faker.person.bio(),
        phone: faker.phone.number('+44 7# ## ## ## ##'),
        avatar: faker.image.avatarLegacy(),
        skills: randomSkills()
    });
    team[i].email = `${team[i].firstname.toLowerCase()}.${team[i].lastname.toLowerCase()}@company.com`;
}

function randomSkills(){
    let skills = [];
    while (skills.length < 3) {
        const skill = randomSkill();
        if (!skills.includes(skill)) {
            skills.push(skill);
        }
    }
    return skills.join(', ');
}

function randomSkill(){
    const random = Math.floor(Math.random() * skills.length);
    return skills[random];
}

module.exports = team;