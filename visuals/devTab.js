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