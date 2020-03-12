import { Board } from './board';

export class Cell extends Phaser.GameObjects.Sprite {
    private id: number;
    private row: number;
    private col: number;
    private key: string;
    private board: Board;
    private selected: boolean;

    constructor(scene: Phaser.Scene, board: Board, x: number, y: number, key: string, row: number, col: number, id: number) {
        const tex = `rune_n_${key}`;
        console.log(`tex: ${tex}`);
        super(scene, x, y, tex);
        scene.add.existing(this);

        this.id = id;
        this.board = board;
        this.row = row;
        this.col = col;
        this.key = key;
        this.selected = false;

        this.setInteractive().on('pointerdown', this.enterSelectedState);
    }

    public changeKey(newKey: string): string {
        const oldKey = this.key;
        this.setTexture(`rune_n_${newKey}`);
        this.key = newKey;
        return oldKey;
    }

    public getKey(): string {
        return this.key;
    }

    public getRow() {
        return this.row;
    }

    public getCol() {
        return this.col;
    }

    public checkIfNeigbour(c: Cell): boolean {
        const rd = c.getRow() - this.row;
        const cd = c.getCol() - this.col;

        if (((rd <= 1 && rd >= -1) && cd === 0) || (rd === 0 && (cd <= 1 && cd >= -1))) {
            return true;
        }

        return false;
    }

    public deselect() {
        this.setTexture(`rune_n_${this.key}`);
        this.setScale(1);
        this.selected = false;
    }

    public select() {
        this.setTexture(`rune_o_${this.key}`);
        this.setScale(1.05);
        this.selected = true;
    }

    private enterSelectedState() {
        if (this.selected) return;
        this.board.onCellSelected(this);
    }
}