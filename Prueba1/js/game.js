import PIXI from './pixi.js';
export class Game{
    constructor(){
        this.app = new PIXI.Application();
        document.getElementById("root").appendChild(this.app.view);
    }
    async start() {
        
        await app.init({ width: 640, height: 360 });
        //this.app.ticker.add(delta => this.gameLoop(delta));
    }
}