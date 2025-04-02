//import * as PIXI from './pixi.js';
export default class Game{
    constructor(){
        this.gameObjects = [];
        this.app = new PIXI.Application();
    }
    async startCanvas() {
        console.log("Starting game...");
        await this.app.init();
        document.getElementById("root").appendChild(this.app.canvas);
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
    }
    loadGameObjects(){
        console.log("Loading game objects...");
        // Load game objects here
        this.gameObjects.forEach(gameObject => {
            this.app.stage.addChild(gameObject.sprite);
        });
    }
}