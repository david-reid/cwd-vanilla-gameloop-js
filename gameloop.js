class GameLoop {

    constructor() {
        this.fps = 60;
        this.ctx = null;
        this.cnv = null;
        this.loop = null;
    }

    prepareCanvas() {
        this.cnv = document.getElementById('canvas');
        this.ctx = this.cnv.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        this.cnv.width = window.innerWidth;
        this.cnv.height = window.innerHeight;
    }

    start() {
        this.prepareCanvas();
        this.init();
        this.loop = setInterval(() => {
            this.update();
            this.render();
        }, 1000/this.fps);
    }

    init() {
        console.log('gameloop initialising...');
    }

    update() {
    }

    render() {
        console.log('gameloop rendering...');
    }
}
