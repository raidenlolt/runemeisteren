import { getGameHeight, getGameWidth } from '../helpers';
import { Cell } from '../core/cell';
import { Board } from '../core/board';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    /* public speed: number = 200;

    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private image: Phaser.Physics.Arcade.Sprite; */

    private board: Board;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        // this.image = this.physics.add.sprite(getGameWidth(this) / 2, getGameHeight(this) / 2, 'man');
        // this.cursorKeys = this.input.keyboard.createCursorKeys();

        // this.rune = new Cell(this, getGameWidth(this) / 2, getGameHeight(this) / 2, 'runes', 't');
        this.board = new Board(
            this,
            getGameWidth(this) / 2, getGameHeight(this) / 2,
            8, 8, 56, 62, 0x00660F,
            ['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','z']);
    }
}