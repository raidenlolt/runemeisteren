import { getGameWidth, getGameHeight } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};

export class BootScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public preload() {
        const halfWidth = getGameWidth(this) * 0.5;
        const halfHeight = getGameHeight(this) * 0.5;

        const progressBarHeight = 100;
        const progressBarWidth = 400;

        const progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        const progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);

        const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        const percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        const assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);

        this.load.on('progress', (value) => {
            progressBar.width = (progressBarWidth - 30) * value;

            const percent = value * 100;
            percentText.setText(`${percent}%`);
        });

        this.load.on('fileprogress', (file) => {
            assetText.setText(file.key);
        });

        this.load.on('complete', () => {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();

            this.scene.start('MainMenu');
        });

        this.loadAssets();
    }

    private loadAssets() {
        this.load.image('rune_n_a', 'assets/sprites/runes_normal/a.png');
        this.load.image('rune_n_b', 'assets/sprites/runes_normal/b.png');
        this.load.image('rune_n_d', 'assets/sprites/runes_normal/d.png');
        this.load.image('rune_n_e', 'assets/sprites/runes_normal/e.png');
        this.load.image('rune_n_f', 'assets/sprites/runes_normal/f.png');
        this.load.image('rune_n_g', 'assets/sprites/runes_normal/g.png');
        this.load.image('rune_n_h', 'assets/sprites/runes_normal/h.png');
        this.load.image('rune_n_i', 'assets/sprites/runes_normal/i.png');
        this.load.image('rune_n_j', 'assets/sprites/runes_normal/j.png');
        this.load.image('rune_n_k', 'assets/sprites/runes_normal/k.png');
        this.load.image('rune_n_l', 'assets/sprites/runes_normal/l.png');
        this.load.image('rune_n_m', 'assets/sprites/runes_normal/m.png');
        this.load.image('rune_n_n', 'assets/sprites/runes_normal/n.png');
        this.load.image('rune_n_ng', 'assets/sprites/runes_normal/ng.png');
        this.load.image('rune_n_o', 'assets/sprites/runes_normal/o.png');
        this.load.image('rune_n_p', 'assets/sprites/runes_normal/p.png');
        this.load.image('rune_n_r', 'assets/sprites/runes_normal/r.png');
        this.load.image('rune_n_s', 'assets/sprites/runes_normal/s.png');
        this.load.image('rune_n_t', 'assets/sprites/runes_normal/t.png');
        this.load.image('rune_n_th', 'assets/sprites/runes_normal/th.png');
        this.load.image('rune_n_u', 'assets/sprites/runes_normal/u.png');
        this.load.image('rune_n_w', 'assets/sprites/runes_normal/w.png');
        this.load.image('rune_n_z', 'assets/sprites/runes_normal/z.png');

        this.load.image('rune_o_a', 'assets/sprites/runes_outline/a.png');
        this.load.image('rune_o_b', 'assets/sprites/runes_outline/b.png');
        this.load.image('rune_o_d', 'assets/sprites/runes_outline/d.png');
        this.load.image('rune_o_e', 'assets/sprites/runes_outline/e.png');
        this.load.image('rune_o_f', 'assets/sprites/runes_outline/f.png');
        this.load.image('rune_o_g', 'assets/sprites/runes_outline/g.png');
        this.load.image('rune_o_h', 'assets/sprites/runes_outline/h.png');
        this.load.image('rune_o_i', 'assets/sprites/runes_outline/i.png');
        this.load.image('rune_o_j', 'assets/sprites/runes_outline/j.png');
        this.load.image('rune_o_k', 'assets/sprites/runes_outline/k.png');
        this.load.image('rune_o_l', 'assets/sprites/runes_outline/l.png');
        this.load.image('rune_o_m', 'assets/sprites/runes_outline/m.png');
        this.load.image('rune_o_n', 'assets/sprites/runes_outline/n.png');
        this.load.image('rune_o_ng', 'assets/sprites/runes_outline/ng.png');
        this.load.image('rune_o_o', 'assets/sprites/runes_outline/o.png');
        this.load.image('rune_o_p', 'assets/sprites/runes_outline/p.png');
        this.load.image('rune_o_r', 'assets/sprites/runes_outline/r.png');
        this.load.image('rune_o_s', 'assets/sprites/runes_outline/s.png');
        this.load.image('rune_o_t', 'assets/sprites/runes_outline/t.png');
        this.load.image('rune_o_th', 'assets/sprites/runes_outline/th.png');
        this.load.image('rune_o_u', 'assets/sprites/runes_outline/u.png');
        this.load.image('rune_o_w', 'assets/sprites/runes_outline/w.png');
        this.load.image('rune_o_z', 'assets/sprites/runes_outline/z.png');
    }
}