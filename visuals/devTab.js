plppdo.on('domChanged', () => {
    if (document.getElementById('khankillTab')) return;

    function createTab(name, href = '#') { 
        const li = document.createElement('li'); 
        li.innerHTML = `<a href="${href}">${name}</a>`; 
        return li; 
    }

    const nav = document.querySelector('nav[data-testid="side-nav"]'); 
    if (!nav) return;

    const section = document.createElement('section');
    section.id = 'khankillTab';
    section.className = '_1ozlbq6';
    section.innerHTML = 'Khankill';

    const ul = document.createElement('ul');
    const devTab = createTab('Developer', '#');
    
    devTab.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        window.khankillWin = window.open("", "_blank");
        if (window.khankillWin) {
            window.khankillWin.document.write(`
                <html>
                    <head>
                        <title>Developer Options</title>
                        <style>
                            body { background: #1a1a1a; color: white; font-family: Arial, sans-serif; padding: 20px; }
                            .toggle { margin: 10px 0; }
                            #debugBox { background: #000; padding: 10px; height: 200px; overflow-y: scroll; white-space: pre-wrap; }
                        </style>
                    </head>
                    <body>
                        <h1>Developer Options</h1>
                        <div id="toggles"></div>
                        <h2>Debug Log</h2>
                        <div id="debugBox"></div>
                    </body>
                </html>
            `);
            createToggle('Debug Mode', 'Enables debugging logs', 'debugMode', window.debugMode || false);
            createToggle('Disable Security', 'Enables Right click and Ctrl + Shift + I again', 'disableSecurity', window.disableSecurity || false);
            createToggle('Disable Ping Request', 'Disables the request triggered every 1 second to find out the ping in ms', 'disablePing', window.disablePing || false);
        }
    });

    ul.appendChild(devTab);
    section.appendChild(ul);
    nav.appendChild(section);
});

window.createToggle = function(name, desc, varName, toggled = false) {
    if (!window.khankillWin || window.khankillWin.closed) return;

    const toggleContainer = window.khankillWin.document.getElementById('toggles');
    if (!toggleContainer) return;

    const toggleId = `toggle-${varName}`;

    const toggleElement = document.createElement('div');
    toggleElement.className = 'toggle';
    toggleElement.innerHTML = `
        <label>
            <input type="checkbox" id="${toggleId}" ${toggled ? 'checked' : ''}>
            ${name}
            <p>${desc}</p>
        </label>
    `;

    toggleElement.querySelector('input').addEventListener('change', (e) => {
        window[varName] = e.target.checked;
        debug(`❕${name} set to ${window[varName]}`);
    });

    toggleContainer.appendChild(toggleElement);
};
window.debug = function(message) {
    if (!window.khankillWin || window.khankillWin.closed || !window.debugMode) return;
    
    const debugBox = window.khankillWin.document.getElementById('debugBox');
    if (debugBox) {
        debugBox.innerHTML += message + '\n';
        debugBox.scrollTop = debugBox.scrollHeight;
    }
};
window.onerror = function(message, source, lineno, colno, error) { 
    debug(`🚨 Error @ ${source}:${lineno},${colno} \n${error ? error.stack : message}`); 
    return true; 
};