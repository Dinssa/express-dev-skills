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
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        gender: faker.person.gender(),
        email: faker.internet.email(),
        bio: faker.person.bio(),
        phone: faker.phone.number('+44 7# ## ## ## ##'),
        avater: faker.image.avatarLegacy(),
        skills: randomSkills()
    });
}

function randomSkills(){
    return `${randomSkill()}, ${randomSkill()}, ${randomSkill()}`;
}

function randomSkill(){
    const random = Math.floor(Math.random() * skills.length);
    return skills[random];
}

module.exports = team;