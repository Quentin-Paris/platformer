class Tableau06 extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('monstre-rose','assets/monstre-rose.png');
    }
    create() {
        super.create();
        //quelques étoiles
        let largeur=64*2;
        this.stars=this.physics.add.group();
        for(let posX=largeur/2;posX<largeur*7;posX+=largeur){
            this.stars.create(posX ,0,"star");
        }
        this.stars.children.iterate(function (child) {
            child.setBounce(1);
            child.setGravity(1);
            child.setCollideWorldBounds(true);
            child.setVelocity( 0,Phaser.Math.Between(-100, 100));
            child.setMaxVelocity(0,500);
        });
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        //notre monstre violet
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-65,"monster-violet");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(40);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        //notre monstre rose
    
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-150,"monstre-rose");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(43,32);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(75);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

    }

}
