import { Cell } from './cell';

export class Board extends Phaser.GameObjects.Rectangle {
    private cellArray: Cell[];
    private cellX: number;
    private cellY: number;

    private selectedCells: Cell[];
    private swappingCells: Cell[];

    private game: Phaser.Scene;

    constructor(
        scene: Phaser.Scene,
        x: number, y: number,
        cellX: number, cellY: number,
        cellWidth: number, cellHeight: number,
        backgroundColor: number,
        keys: string[]
    ) {
        super(scene, x, y, cellX * cellWidth, cellY * cellHeight, backgroundColor);
        // scene.add.rectangle(x, y, cellX*cellWidth, cellY*cellHeight, backgroundColor);
        scene.add.existing(this);

        this.selectedCells = [];
        this.swappingCells = [];

        this.cellX = cellX;
        this.cellY = cellY;

        this.cellArray = [];
        const startX = x - cellX * cellWidth / 2;
        const startY = y - cellY * cellHeight / 2;

        console.log(`(${startX},${startY})`);

        for (let i = 0; i < cellX; i++) {
            for (let j = 0; j < cellY; j++) {
                const keyIndex = Phaser.Math.Between(0, keys.length - 1);
                this.cellArray.push(new Cell(
                    scene, this,
                    startX + i * cellWidth + cellWidth / 2, startY + j * cellHeight + cellHeight / 2,
                    keys[keyIndex], i, j,
                    i*cellY+j));
            }
        }

        this.game = scene;
    }

    private swapCells(c1: Cell, c2: Cell) {
        // c1.changeKey(c2.changeKey(c1.getKey()));
        const x1 = c1.x;
        const y1 = c1.y;
        const x2 = c2.x;
        const y2 = c2.y;
        const row1 = c1.getRow();
        const col1 = c1.getCol();
        const row2 = c2.getRow();
        const col2 = c2.getCol();

        this.swappingCells.push(c1);
        this.swappingCells.push(c2);

        this.scene.tweens.add({
            targets: c1,
            x: x2,
            y: y2,
            ease: 'Power1',
            duration: 500,
            onComplete: this.onCompleteSwap,
            onCompleteParams: [this, c1]
        });

        this.scene.tweens.add({
            targets: c2,
            x: x1,
            y: y1,
            ease: 'Power1',
            duration: 500,
            onComplete: this.onCompleteSwap,
            onCompleteParams: [this, c2]
        });
    }

    public onCellSelected(cell: Cell) {
        if(this.swappingCells === null || this.swappingCells.length > 0) return;

        console.log(`selected cell: {${cell.getKey()}}`);
        if (this.selectedCells.length < 2) {
            cell.select();
            this.selectedCells.push(cell);
        }

        console.log(`selectedCells: ${this.selectedCells.length}`);
        if (this.selectedCells.length === 2) {
            const cell1 = this.selectedCells.pop();
            const cell2 = this.selectedCells.pop();
            if (cell1.checkIfNeigbour(cell2)) {
                this.swapCells(cell1, cell2);
                this.removeMatches();
            }
        }
    }

    private onCompleteSwap(tween, targets, board: Board, cell: Cell) {
        cell.deselect();
        board.swappingCells.pop();
        console.log(`tween completed for cell:${cell.getKey()} with swappingCells: ${board.swappingCells.length}`);
    }

    private removeMatches() {
        // TODO check for matches and remove them.
    }
}