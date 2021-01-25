class Tableau06 extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('monstre-rose','assets/monstre-rose.png');
        this.load.image('monster-fly', 'assets/monster-fly.png');
    }
    create() {
        super.create();
        //quelques étoiles
        this.star1=this.physics.add.sprite(800,400,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);
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

        //nos monstres volants
        new MonsterFly(this,400,100);

    }

}
