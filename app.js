import * as  PIXI from 'pixi.js';
import $ from './import-jquery';
import {route, router} from 'jqueryrouter';
import data from './data.json';
import jqueryRouter from 'jqueryrouter';











let img_desierto = require('./images/desert.jpg');

let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight});
let container = new PIXI.Container();
let idesierto, imaquila;

let loader  =PIXI.Loader.shared;
app.stage.addChild(container);
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor =  0xfcfcfa;

document.body.appendChild(app.view);

loader.add('idesierto', img_desierto);
 
let filterNoise = new PIXI.filters.NoiseFilter(.2);

loader.load((loader, resources) =>{
    idesierto = new PIXI.Sprite(resources.idesierto.texture);
    idesierto.anchor.set(0.5);
    idesierto.scale.x = -1;
    idesierto.height =  app.renderer.height;
    idesierto.width = app.renderer.width;
    idesierto.x = app.renderer.width / 2;
    idesierto.y = app.renderer.height / 2;
    let colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.kodachrome(true);
    colorMatrix.greyscale(.9); 
    colorMatrix.contrast(-.1,.2);
    idesierto.filters = [colorMatrix, filterNoise];
    app.stage.addChild(idesierto);

    
});

app.ticker.add((delta) => {
    filterNoise.uniforms.uSeed = 0.9 * (delta/3);
    
})




module.exports.power = function power() {
    
}


$(document).ready(function(){
    
    route('/jose', function(){
        $("#content").hide();
    });

    route('/meow', function() {
        $("#content").hide();
    });
    
    router.set('/jose');   
});











// $(document).ready(function(){

    
    

//     //$('#content').toggle(location.hash == '' || location.hash == '#jose');;
// });

// import * as  PIXI from 'pixi.js';
// import $ from 'jquery';

// let img_desierto = require('./images/ferrofluid.jpg');
// let img_maquila = require('./images/baby.svg');
// let i_copo = require('./images/polo.png');

// let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight});
// let container = new PIXI.Container();
// let idesierto, imaquila;
// let loader = PIXI.Loader.shared;

// app.stage.addChild(container);

// document.body.appendChild(app.view);

// app.renderer.autoResize = true;
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
// app.renderer.resize(window.innerWidth, window.innerHeight);

//  loader.add('idesierto', img_desierto);
// // loader.add('imaquila', img_maquila);
// //loader.add('iCopo', i_copo);
// let filtroBlackWhite, filtroArena;

// let iCopo;

// // const starTexture = PIXI.texture.from('./images/star.png');
// // const stars = [];

// // for (let i = 0; i < starAmount; i++) {
// //     const star = {
// //         sprite: new PIXI.Sprite(starTexture),
// //         z: 0,
// //         x: 0,
// //         y: 0,
// //     };
// //     star.sprite.anchor.x = 0.5;
// //     star.sprite.anchor.y = 0.7;
// //     randomizeStar(star, true);
// //     app.stage.addChild(star.sprite);
// //     stars.push(star);
// // }

// loader.load((loader, resources) => {

//     // iCopo = new PIXI.Sprite(resources.iCopo.texture);
//     // iCopo.anchor.set(0.5);
//     // iCopo.x = app.renderer.width / 2;
//     // iCopo.y = app.renderer.height / 2;
//     // iCopo.scale.set(.3, .3);
//     // let filtroBlackWhite = new PIXI.filters.ColorMatrixFilter();
//     // filtroBlackWhite.contrast(.1,0);
//     // iCopo.filters = [filtroBlackWhite];
    
//     // app.stage.addChild(iCopo);

//     // loop();

//     idesierto = new PIXI.Sprite(resources.idesierto.texture);
//     idesierto.anchor.set(0.5);  
//     idesierto.height =  app.renderer.height;
//     idesierto.width = app.renderer.width;
//     idesierto.x = app.renderer.width / 2;
//     idesierto.y = app.renderer.height / 2;
//     filtroBlackWhite = new PIXI.filters.ColorMatrixFilter(idesierto);
//     filtroBlackWhite.greyscale(0);
//     filtroArena = new PIXI.filters.NoiseFilter(.0);
//     idesierto.filters = [filtroBlackWhite];
//     // imaquila = new PIXI.Sprite(resources.imaquila.texture);
//     // imaquila.anchor.set(0.5);
//     // imaquila.height =  app.renderer.height;
//     // imaquila.width = app.renderer.width;
//     // imaquila.x = app.renderer.width/3 ;
//     // imaquila.y = app.renderer.height / 2;
//     app.stage.addChild(idesierto);
// });

// let copoY = (app.renderer.height / 2) + 150;
// let swish = false;
// //let topeY = iCopo.y;

// function loop() {
//     // iCopo.y -= 1/20;
//     if(iCopo.y < copoY) {

//     }
//     requestAnimationFrame(loop);
// }

// //ACTIONS
