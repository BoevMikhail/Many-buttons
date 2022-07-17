let button = document.querySelector('.MyButton');
let levelGround = document.querySelector('.levelgroud');
let level = document.querySelector('.level');

const createButton = (e) => {
    let level = document.querySelector(`.level-${Number(e.dataset.value)+1}`);
    if(!level){
        let newLevel = document.createElement('div');
        let lineName = document.createElement('span');
        lineName.classList.add('lineName');
        lineName.innerHTML = `Уровень ${Number(e.dataset.value)+1}`
        newLevel.append(lineName);
        newLevel.classList.add(`level`);
        newLevel.classList.add(`level-${Number(e.dataset.value)+1}`);
        levelGround.append(newLevel);
        level = newLevel;
    }

    let newButton = document.createElement('button');
    newButton.classList.add('MyButton'); 
    newButton.innerHTML = `Кнопка ${Number(e.dataset.value)+1}`;
    newButton.dataset.value = Number(e.dataset.value)+1;
    newButton.addEventListener('click', (e) => createButton(e.target));
    level.append(newButton);
    newButton = newButton.cloneNode('true');
    newButton.addEventListener('click', (e) => createButton(e.target));
    level.append(newButton);
    e.remove();

    let levels = document.querySelectorAll('.level');
    levels.forEach((lev, index) => {if(!lev.querySelector('.MyButton')){lev.remove()}});
    

}

button.addEventListener('click', (e) => {
    createButton(e.target);
}) 