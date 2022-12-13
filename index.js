document.querySelector('body').style.margin = 0;
document.querySelector('body').style.overflow = 'hidden'

const canvasDOM = document.querySelector('canvas');
const WIDTH = (canvasDOM.width = innerWidth);
const HEIGHT = (canvasDOM.height = innerHeight);

const canvas = canvasDOM.getContext('2d');
const CircleArray = [];
const gradientCircle = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle2 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle3 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle4 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle5 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle6 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle7 = canvas.createLinearGradient(0, 0, 0, HEIGHT);
const gradientCircle8 = canvas.createLinearGradient(0, 0, 0, HEIGHT);

const colorArray = [
    gradientCircle,
    gradientCircle2,
    gradientCircle3,
    gradientCircle4,
    gradientCircle5,
    gradientCircle6,
    gradientCircle7
];

class DrawCircle {

    constructor(x, y, r, dx, dy) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    draw() {

        canvas.beginPath();
        canvas.fillStyle = this.color;
        canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        canvas.fill();
        if (this.x + this.r > WIDTH || this.x - this.r < 0) {

            this.dx = -this.dx;
        }

        if (this.y + this.r > HEIGHT || this.y - this.r < 0) {

            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    };
}

const animation = () => {

    canvas.fillStyle = 'aliceblue';
    canvas.fillRect(0, 0, WIDTH, HEIGHT);
    for (i = 0; i < CircleArray.length; i += 1) {

        CircleArray[i].draw();
    }
    requestAnimationFrame(animation);
}

const init = () => {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            gradientCircle.addColorStop(i / 10, 'black');
            gradientCircle2.addColorStop(i / 10, 'black');
            gradientCircle3.addColorStop(i / 10, 'black');
            gradientCircle4.addColorStop(i / 10, 'black');
            gradientCircle5.addColorStop(i / 10, 'black');
            gradientCircle6.addColorStop(i / 10, 'black');
            gradientCircle7.addColorStop(i / 10, 'black');
            gradientCircle8.addColorStop(i / 10, 'black');
        } else {
            gradientCircle.addColorStop(i / 10, 'white');
            gradientCircle2.addColorStop(i / 10, 'chocolate');
            gradientCircle3.addColorStop(i / 10, 'cornflowerblue');
            gradientCircle4.addColorStop(i / 10, 'darkviolet');
            gradientCircle5.addColorStop(i / 10, 'rebeccapurple');
            gradientCircle6.addColorStop(i / 10, 'lightslategrey');
            gradientCircle7.addColorStop(i / 10, 'crimson');
            gradientCircle8.addColorStop(i / 10, 'blue');
        }
    }


    for (i = 0; i < 100; i += 1) {
        const r = Math.random() * 50;
        const dx = Math.random() * 2;
        const dy = Math.random() * 3;
        const x = Math.random() * (WIDTH - 2 * r) + r;
        const y = Math.random() * (HEIGHT - 2 * r) + r;
        CircleArray.push(new DrawCircle(x, y, r, dx, dy));
    }

    animation()
}


init();