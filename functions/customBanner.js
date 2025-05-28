const phrases = [ 
    "[🌿] Non Skeetless dude.",
    "[🌿] Khankill on top.",
    "[🌿] Orickmaxx said hello!",
    "[🌿] God I wish I had Khankill.",
    "[🌿] Get good get Khankill!",
    "[🌿] khankill.space goes brrrrr" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting && features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);