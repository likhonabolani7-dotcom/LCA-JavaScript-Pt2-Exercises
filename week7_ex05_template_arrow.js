
const multilineText = `Welcome to the Advanced Web Development Course!
    - Language: JavaScript (ES6+)
    - Framework: Node.js
    - Focus: Clean, maintainable code structures.`;


const generateProfileCard = (user) => {
    return `
        <div class="profile-card" id="user-${user.id}">
            <img src="${user.avatarUrl}" alt="${user.name}'s profile picture" />
            <div class="profile-details">
                <h2>${user.name}</h2>
                <p class="role">${user.role.toUpperCase()}</p>
                <p class="bio">${user.bio}</p>
            </div>
        </div>
    `.trim(); // .trim() removes unnecessary blank lines at the start and end
};


const greet = (name) => `Hello, ${name}!`;

const square = n => n * n;


const people = [
    { name: 'Likhona', age: 28 },
    { name: 'Devon', age: 34 },
    { name: 'Kanye', age: 22 }
];

const peopleListHTML = `
<ul>
${people.map(p => `  <li>${p.name} — ${p.age} years</li>`).join('\n')}
</ul>
`;

const adults = people.filter(p => p.age >= 18);
const names = adults.map(p => p.name);
const totalAge = adults.reduce((sum, p) => sum + p.age, 0);



console.log('--- Multiline Text ---');
console.log(multilineText);

console.log('\n--- Generated Profile Card ---');
console.log(generateProfileCard({
    id: 1,
    name: 'Kendrick',
    role: 'Software Dev',
    bio: 'Loves clean code and coffee.',
    avatarUrl: 'https://example.com/avatar1.jpg'
}));

console.log('\n--- Greet / Square ---');
console.log(greet('Sibongile'));
console.log('Square of 6:', square(6));

console.log('\n--- People List HTML ---');
console.log(peopleListHTML);

console.log('\n--- Array Methods with Arrows ---');
console.log('Names:', names.join(', '));
console.log('Total age:', totalAge);

// Export examples for interactive testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        multilineText,
        generateProfileCard,
        greet,
        square,
        people,
        peopleListHTML,
        adults,
        names,
        totalAge
    };
}
