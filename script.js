class Balls{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
        this.create();
        this.init();
        this.go();
    }
    
    create(){
        let temp = document.createElement('div');
        this.body = temp;
        this.body.style.width = this.width + 'px';
        this.body.style.height = this.height + 'px';
        this.body.style.backgroundColor = this.color;
        this.body.style.position = 'absolute';
        this.body.style.borderRadius = '50%';
        this.body.style.transform = 'translate(0px, 0px)';
    }
    init(){
        document.querySelector('.wrapper').append(this.body)
    }

    go(){
        
        const wrapper = document.querySelector('.wrapper');
        let top = 0;
        let left = 0;
        let flagX = false;
        let flagY = false;
        setInterval(()=>{
            if(!flagX){
                if(top >= parseInt(document.documentElement.offsetHeight) - this.height){
                    flagX = true;
                }
                top += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            } else {
                if(top <= 0){
                    flagX = false;
                }
                top -= Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            }
            if(!flagY){
                if(left >= parseInt(document.documentElement.offsetWidth) - this.width){
                    flagY = true;
                }
                left += Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            } else {
                if(left <= 0){
                    flagY = false;
                }
                left-= Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            }
            this.body.style.transform = `translate(${left}px, ${top}px)`;
            
        }, 1);
    }

}

let b1 = new Balls(200,200, 'yellow');
setTimeout(function(){let b2 = new Balls(100,100, 'teal');}, 700)
setTimeout(function(){let b3 = new Balls(150,150, 'yellowgreen');}, 1300)
setTimeout(function(){let b4 = new Balls(70,70, 'greenyellow');}, 1600)
setTimeout(function(){let b5 = new Balls(90,90, 'purple');}, 500)
setTimeout(function(){let b6 = new Balls(120,120, 'aquamarine');}, 2000)