const ver = "V3.0.5";
const repoPath = "https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/dev/"


let device = {
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Tablet|Kindle|Silk|PlayBook|BB10/i.test(navigator.userAgent),
    apple: /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(navigator.userAgent)
};

/* User */
let user = {
    username: "Username",
    nickname: "Nickname",
    UID: 0
}

let loadedPlugins = [];

/* Elements */
const unloader = document.createElement('unloader');
const dropdownMenu = document.createElement('dropDownMenu');
const watermark = document.createElement('watermark');
const statsPanel = document.createElement('statsPanel');
const splashScreen = document.createElement('splashScreen');

/* Globals */
window.features = {
    questionSpoof: true,
    videoSpoof: true,
    showAnswers: false,
    autoAnswer: false,
    customBanner: false,
    nextRecomendation: false,
    repeatQuestion: false,
    minuteFarmer: false,
    rgbLogo: false
};
window.featureConfigs = {
    autoAnswerDelay: 3,
    customUsername: "",
    customPfp: ""
};

/* Security 
document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
document.addEventListener('keydown', function (e) { if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))) e.preventDefault(); });
console.log(Object.defineProperties(new Error, { toString: {value() {(new Error).stack.includes('toString@') && location.reload();}}, message: {get() {location.reload();}}, }));
*/

/* Misc Styles */
document.head.appendChild(Object.assign(document.createElement("style"),{innerHTML:"@font-face{font-family:'MuseoSans';src:url('https://corsproxy.io/?url=https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf')format('truetype')}" }));
document.head.appendChild(Object.assign(document.createElement('style'),{innerHTML:"::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #f1f1f1; } ::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: #555; }"}));
document.querySelector("link[rel~='icon']").href = 'https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ukh0rq22.png';

/* Emmiter */
class EventEmitter{constructor(){this.events={}}on(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]||(this.events[t]=[]),this.events[t].push(e)})}off(t,e){"string"==typeof t&&(t=[t]),t.forEach(t=>{this.events[t]&&(this.events[t]=this.events[t].filter(t=>t!==e))})}emit(t,...e){this.events[t]&&this.events[t].forEach(t=>{t(...e)})}once(t,e){"string"==typeof t&&(t=[t]);let s=(...i)=>{e(...i),this.off(t,s)};this.on(t,s)}};
const plppdo = new EventEmitter();

new MutationObserver((mutationsList) => { for (let mutation of mutationsList) if (mutation.type === 'childList') plppdo.emit('domChanged'); }).observe(document.body, { childList: true, subtree: true });

/* Misc Functions */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const playAudio = url => { const audio = new Audio(url); audio.play(); };
const checkCollision = (obj1, obj2) => !( obj1.right < obj2.left || obj1.left > obj2.right || obj1.bottom < obj2.top || obj1.top > obj2.bottom );
const findAndClickByClass = className => { const element = document.querySelector(`.${className}`); if (element) { element.click(); sendToast(`⭕ Pressionando ${className}...`, 1000); } }

function sendToast(text, duration=5000, gravity='bottom') { Toastify({ text: text, duration: duration, gravity: gravity, position: "center", stopOnFocus: true, style: { background: "#000000" } }).showToast(); };

async function showSplashScreen() { splashScreen.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;transition:opacity 0.5s ease;user-select:none;color:white;font-family:MuseoSans,sans-serif;font-size:30px;text-align:center;"; splashScreen.innerHTML = '<span style="color:white;">KHANWARE</span><span style="color:#72ff72;">.SPACE</span>'; document.body.appendChild(splashScreen); setTimeout(() => splashScreen.style.opacity = '1', 10);};
async function hideSplashScreen() { splashScreen.style.opacity = '0'; setTimeout(() => splashScreen.remove(), 1000); };

async function loadScript(url, label) { return fetch(url).then(response => response.text()).then(script => { loadedPlugins.push(label); eval(script); }); }
async function loadCss(url) { return new Promise((resolve) => { const link = document.createElement('link'); link.rel = 'stylesheet'; link.type = 'text/css'; link.href = url; link.onload = () => resolve(); document.head.appendChild(link); }); }

/* Visual Functions */
function setupMenu() {
    loadScript(repoPath+'visuals/mainMenu.js', 'mainMenu');
    loadScript(repoPath+'visuals/statusPanel.js', 'statusPanel');
    loadScript(repoPath+'visuals/widgetBot.js', 'statusPanel');

    function khanwareTab() {
        let htmlMenu = `
        <div class="toggle-menu">
            <div class="toggle-item">
                <div class="toggle-text">
                    <h3>Opção 1</h3>
                    <p>Descrição da opção 1</p>
                </div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="toggle-item">
                <div class="toggle-text">
                    <h3>Opção 2</h3>
                    <p>Descrição da opção 2</p>
                </div>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>

        <style>
        .toggle-menu {
            width: 100%;
            background: #2a2a2a;
            padding: 10px;
            border-radius: 8px;
        }

        .toggle-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #444;
        }

        .toggle-item:last-child {
            border-bottom: none;
        }

        .toggle-text h3 {
            margin: 0;
            font-size: 16px;
            color: #fff;
        }

        .toggle-text p {
            margin: 0;
            font-size: 12px;
            color: #bbb;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #444;
            transition: .4s;
            border-radius: 20px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 14px;
            width: 14px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #00c853;
        }

        input:checked + .slider:before {
            transform: translateX(20px);
        }
        </style>`

        plppdo.on('domChanged', () => {
            if(document.getElementById('khanwareTab')) return
            function createTab(name, href = '#') { const li = document.createElement('li'); li.innerHTML = `<a class="_8ry3zep" href="${href}"><span class="_xy39ea8">${name}</span></a>`; return li; }
            const nav = document.querySelector('nav[data-testid="side-nav"]'); if (!nav) return;
            const section = document.createElement('section');

            section.id = 'khanwareTab';
            section.className = '_1ozlbq6';
            section.innerHTML = '<h2 class="_18undph9">Khanware</h2>';
            
            const ul = document.createElement('ul');
            ul.appendChild(createTab('Developer', '#khanware'));
            
            section.appendChild(ul);
            nav.appendChild(section);
        });
    }

    khanwareTab();
}

/* Main Functions */ 
function setupMain(){
    function spoofQuestion() {
        const phrases = [ "🔥 Get good, get [Khanware](https://github.com/Niximkk/khanware/)!", "🤍 Made by [@im.nix](https://e-z.bio/sounix).", "☄️ By github.com/Niximkk/khanware/ " ];
        const originalFetch = window.fetch;
        window.fetch = async function (input, init) {
            let body;
            if (input instanceof Request) body = await input.clone().text();
            else if (init && init.body) body = init.body;
            const originalResponse = await originalFetch.apply(this, arguments);
            const clonedResponse = originalResponse.clone();
            try {
                const responseBody = await clonedResponse.text();
                let responseObj = JSON.parse(responseBody);
                if (features.questionSpoof && responseObj?.data?.assessmentItem?.item?.itemData) {
                    let itemData = JSON.parse(responseObj.data.assessmentItem.item.itemData);
                    if(itemData.question.content[0] === itemData.question.content[0].toUpperCase()){
                        itemData.answerArea = { "calculator": false, "chi2Table": false, "periodicTable": false, "tTable": false, "zTable": false }
                        itemData.question.content = phrases[Math.floor(Math.random() * phrases.length)] + `[[☃ radio 1]]`;
                        itemData.question.widgets = { "radio 1": { options: { choices: [ { content: "Resposta correta.", correct: true }, { content: "Resposta incorreta.", correct: false } ] } } };
                        responseObj.data.assessmentItem.item.itemData = JSON.stringify(itemData);
                        sendToast("🔓 Questão exploitada.", 1000);
                        return new Response(JSON.stringify(responseObj), { status: originalResponse.status, statusText: originalResponse.statusText, headers: originalResponse.headers });
                    }
                }
            } catch (e) { }
            return originalResponse;
        };
    }
    function spoofVideo() {
        const originalFetch = window.fetch;
        window.fetch = async function (input, init) {
            let body;
            if (input instanceof Request) body = await input.clone().text();
            else if (init && init.body) body = init.body;
            if (features.videoSpoof && body && body.includes('"operationName":"updateUserVideoProgress"')) {
                try {
                    let bodyObj = JSON.parse(body);
                    if (bodyObj.variables && bodyObj.variables.input) {
                        const durationSeconds = bodyObj.variables.input.durationSeconds;
                        bodyObj.variables.input.secondsWatched = durationSeconds;
                        bodyObj.variables.input.lastSecondWatched = durationSeconds;
                        body = JSON.stringify(bodyObj);
                        if (input instanceof Request) { input = new Request(input, { body: body }); } 
                        else init.body = body; 
                        sendToast("🔓 Vídeo exploitado.", 1000)
                    }
                } catch (e) { }
            }
            return originalFetch.apply(this, arguments);
        };    
    }
    function minuteFarm() {
        const originalFetch = window.fetch;
        window.fetch = async function (input, init = {}) {
            let body;
            if (input instanceof Request) body = await input.clone().text();
            else if (init.body) body = init.body;
            if (features.minuteFarmer && body && input.url.includes("mark_conversions")) {
                try {
                    if (body.includes("termination_event")) { sendToast("🚫 Limitador de tempo bloqueado.", 1000); return; }
                } catch (e) { }
            }
            return originalFetch.apply(this, arguments);
        };
    };
    function spoofUser() {
        plppdo.on('domChanged', () => {
            if(!device.apple){
                const pfpElement = document.querySelector('.avatar-pic');
                const nicknameElement = document.querySelector('.user-deets.editable h2');
                if (nicknameElement) nicknameElement.textContent = featureConfigs.customUsername || user.nickname; 
                if (featureConfigs.customPfp && pfpElement) { Object.assign(pfpElement, { src: featureConfigs.customPfp, alt: "Not an image URL"} );pfpElement.style.borderRadius="50%"}
            }
        });
    }
    function answerRevealer() {
        const originalParse = JSON.parse;
        JSON.parse = function (e, t) {
            let body = originalParse(e, t);
            try {
                if (body?.data) {
                    Object.keys(body.data).forEach(key => {
                        const data = body.data[key];
                        if (features.showAnswers && key === "assessmentItem" && data?.item) {
                            const itemData = JSON.parse(data.item.itemData);
                            if (itemData.question && itemData.question.widgets && itemData.question.content[0] === itemData.question.content[0].toUpperCase()) {
                                Object.keys(itemData.question.widgets).forEach(widgetKey => {
                                    const widget = itemData.question.widgets[widgetKey];
                                    if (widget.options && widget.options.choices) {
                                        widget.options.choices.forEach(choice => {
                                            if (choice.correct) {
                                                choice.content = "✅ " + choice.content;
                                                sendToast("🔓 Respostas reveladas.", 1000);                
                                            }
                                        });
                                    }
                                });
                                data.item.itemData = JSON.stringify(itemData);
                            }
                        }
                    });
                }
            } catch (e) { }
            return body;
        };
    }
    function rgbLogo() {
        plppdo.on('domChanged', () => {
            const khanLogo = document.querySelector('svg._1rt6g9t').querySelector('path:nth-last-of-type(2)');
            const styleElement = document.createElement('style');
            styleElement.className = "RGBLogo"
            styleElement.textContent = `
                @keyframes colorShift {
                    0% { fill: rgb(255, 0, 0); }
                    33% { fill: rgb(0, 255, 0); }
                    66% { fill: rgb(0, 0, 255); }
                    100% { fill: rgb(255, 0, 0); }
                }   
            `;
            if(features.rgbLogo&&khanLogo){
                if(!document.getElementsByClassName('RGBLogo')[0]) document.head.appendChild(styleElement);
                if(khanLogo.getAttribute('data-darkreader-inline-fill')!=null) khanLogo.removeAttribute('data-darkreader-inline-fill');
                khanLogo.style.animation = 'colorShift 5s infinite';
            }
        })
    }
    function changeBannerText() {
        const phrases = [ "[🌿] Non Skeetless dude.", "[🌿] Khanware on top.", "[🌿] Nix said hello!", "[🌿] God i wish i had Khanware.", "[🌿] Get good get Khanware!", "[🌿] the old khanware.space" ];
        setInterval(() => { 
            const greeting = document.querySelector('.stp-animated-banner h2');
            if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        }, 3000);
    }
    async function autoAnswer() {
        const baseClasses = ["_19uopuu", "_ssxvf9l", "_1r8cd7xe", "_1yok8f4"];
        while (true) {
            if(features.autoAnswer&&features.questionSpoof){
                const classToCheck = [...baseClasses];
                if (features.nextRecomendation) { device.mobile ? classToCheck.push("_ixuggsz") : classToCheck.push("_1kkrg8oi"); }
                if (features.repeatQuestion) classToCheck.push("_ypgawqo");
                classToCheck.forEach(async (q) => {
                    findAndClickByClass(q);
                    const element = document.getElementsByClassName(q)[0];
                    if(element&&element.textContent=='Mostrar resumo') { sendToast("🎉 Exercício concluido!", 3000); playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/4x5g14gj.wav'); }
                });
            }
            await delay(featureConfigs.autoAnswerDelay*750);
        }
    }
    spoofQuestion(); spoofVideo(); answerRevealer(); minuteFarm(); spoofUser(); rgbLogo(); changeBannerText(); autoAnswer();
}

/* Inject */
if (!/^https?:\/\/([a-z0-9-]+\.)?khanacademy\.org/.test(window.location.href)) { alert("❌ Khanware Failed to Injected!\n\nVocê precisa executar o Khanware no site do Khan Academy! (https://pt.khanacademy.org/)"); window.location.href = "https://pt.khanacademy.org/"; }

showSplashScreen();

loadScript('https://raw.githubusercontent.com/adryd325/oneko.js/refs/heads/main/oneko.js', 'onekoJs').then(() => { onekoEl = document.getElementById('oneko'); onekoEl.style.backgroundImage = "url('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif')"; onekoEl.style.display = "none"; });
loadScript('https://cdn.jsdelivr.net/npm/darkreader@4.9.92/darkreader.min.js', 'darkReaderPlugin').then(()=>{ DarkReader.setFetchMethod(window.fetch); DarkReader.enable(); })
loadCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css', 'toastifyCss');
loadScript('https://cdn.jsdelivr.net/npm/toastify-js', 'toastifyPlugin')
.then(async () => {
    await fetch(`https://${location.hostname}/api/internal/graphql/getFullUserProfile`, { "body": "{\"operationName\":\"getFullUserProfile\",\"query\":\"query getFullUserProfile($kaid: String, $username: String) {\\n  user(kaid: $kaid, username: $username) {\\n    id\\n    kaid\\n    key\\n    userId\\n    email\\n    username\\n    profileRoot\\n    gaUserId\\n    isPhantom\\n    isDeveloper: hasPermission(name: \\\"can_do_what_only_admins_can_do\\\")\\n    isPublisher: hasPermission(name: \\\"can_publish\\\", scope: ANY_ON_CURRENT_LOCALE)\\n    isModerator: hasPermission(name: \\\"can_moderate_users\\\", scope: GLOBAL)\\n    isParent\\n    isTeacher\\n    isFormalTeacher\\n    isK4dStudent\\n    isKmapStudent\\n    isDataCollectible\\n    isChild\\n    isOrphan\\n    isCoachingLoggedInUser\\n    canModifyCoaches\\n    nickname\\n    hideVisual\\n    joined\\n    points\\n    countVideosCompleted\\n    bio\\n    profile {\\n      accessLevel\\n      __typename\\n    }\\n    soundOn\\n    muteVideos\\n    showCaptions\\n    prefersReducedMotion\\n    noColorInVideos\\n    newNotificationCount\\n    canHellban: hasPermission(name: \\\"can_ban_users\\\", scope: GLOBAL)\\n    canMessageUsers: hasPermission(\\n      name: \\\"can_send_moderator_messages\\\"\\n      scope: GLOBAL\\n    )\\n    isSelf: isActor\\n    hasStudents: hasCoachees\\n    hasClasses\\n    hasChildren\\n    hasCoach\\n    badgeCounts\\n    homepageUrl\\n    isMidsignupPhantom\\n    includesDistrictOwnedData\\n    includesKmapDistrictOwnedData\\n    includesK4dDistrictOwnedData\\n    canAccessDistrictsHomepage\\n    preferredKaLocale {\\n      id\\n      kaLocale\\n      status\\n      __typename\\n    }\\n    underAgeGate {\\n      parentEmail\\n      daysUntilCutoff\\n      approvalGivenAt\\n      __typename\\n    }\\n    authEmails\\n    signupDataIfUnverified {\\n      email\\n      emailBounced\\n      __typename\\n    }\\n    pendingEmailVerifications {\\n      email\\n      __typename\\n    }\\n    hasAccessToAIGuideCompanionMode\\n    hasAccessToAIGuideLearner\\n    hasAccessToAIGuideDistrictAdmin\\n    hasAccessToAIGuideParent\\n    hasAccessToAIGuideTeacher\\n    tosAccepted\\n    shouldShowAgeCheck\\n    birthMonthYear\\n    lastLoginCountry\\n    region\\n    userDistrictInfos {\\n      id\\n      isKAD\\n      district {\\n        id\\n        region\\n        __typename\\n      }\\n      __typename\\n    }\\n    schoolAffiliation {\\n      id\\n      location\\n      __typename\\n    }\\n    __typename\\n  }\\n  actorIsImpersonatingUser\\n  isAIGuideEnabled\\n  hasAccessToAIGuideDev\\n}\"}", "method": "POST", "mode": "cors", "credentials": "include" })
    .then(async response => { let data = await response.json(); user = { nickname: data.data.user.nickname, username: data.data.user.username, UID: data.data.user.id.slice(-5) }; })
    sendToast("🌿 Khanware injetado com sucesso!");
    playAudio('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/gcelzszy.wav');
    await delay(500);
    sendToast(`⭐ Bem vindo(a) de volta: ${user.nickname}`);
    loadedPlugins.forEach(plugin => sendToast(`🪝 ${plugin} Loaded!`, 2000, 'top') );
    hideSplashScreen();
    setupMenu();
    setupMain();
    console.clear();
})

// Thank you to everyone who has purchased access to my cheat as of 10/28/24.
/*
@Thomaz015
@grazynabazio
@meyssaxavier
@WESLEY.SPREDEMANN
@carine.rech.alves
@nazare.de.maria
@jowsanth
@bielzy
@rafaeldeagostino
@AMFDS
@Jv010107
@Mattheusfreitas01
@Guilhermeoliveira2623
@Matt010101
@voncallis
@Thamiris0001
@Holmes1212
@Martinss0000
@zRoque
@LaryCouto.com.br
@IanyckFerreira
@sales7
@AleSobral
@wbzz2121
@Umunizzz
@ViniciusMancini
@ricardaosantista
@marcos10pc
@bzinxxx
@ryanmzmartins
@Kaleb1577
@brunopereirabarros
@RodrigoMartins1236751
@guixzf
@Leandrohenrq
@damnntiago
@WhoisMe777
@Gustavopc21
@matheus.hx2
@WSZL
@LeozinB2
@Davas123
@joaoviturino
@orickmaxx
@l55nar5
@nextbyhawk
@Bruninda019
@GabrielRibeiroP
@Shinjoia
@hy7pee
@arthurmondequedutra
@PedrooVsp
@zBlucker
@vitiintavares
@Holmes1212
@Anthony06927
@refinado
@ErickMarinelli
@pedroomelhor
@gabrielmonteiro0053
@Felipealexandre10
@saantzx7
@alvarosouzaribeiro
@gabrielejte
@Kevinzada
@antonio77xs
@marcus.floriano.oliveira
*/
