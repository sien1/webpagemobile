import * as  PIXI from 'pixi.js';

let img_desierto = require('./images/desert.jpg');

let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight});
let container = new PIXI.Container();
let idesierto;
let loader = PIXI.Loader.shared;

app.stage.addChild(container);

document.body.appendChild(app.view);

app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);



loader.add('idesierto', img_desierto);

loader.load((loader, resources) => {
    idesierto = new PIXI.Sprite(resources.idesierto.texture);
    
    //idesierto.x = app.renderer.width / 2 ;
    //idesierto.y = app.renderer.width / 2;



    app.stage.addChild(idesierto);
});
