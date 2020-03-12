import * as Phaser from "phaser";
import Scenes from './scenes';


const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Runemeisteren',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    scene: Scenes,

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#00000000',

};

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
    game.scale.refresh();
});