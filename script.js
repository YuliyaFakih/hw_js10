let lampOff = document.getElementById('lamp_off')
let lampOn = document.getElementById('lamp_on')

let Lamp = function (power, time) {
    
    this.power = power || 0;
    this.time = time;
    let fare = 0.4;
    let status = false;

    this.electricityCost = function() {
        console.log('Стоимость потраченной электроэнергии ' + this.power*this.time*fare +  ' руб')
    };
    
    this.on = function() {
        this.status = true;
        if(this.status == true) {
            lampOff.style.display = 'none';
            lampOn.style.display = 'block';
        }        
    }
    
    this.off = function() {
        this.status = false;
        if(this.status == false) {
            lampOff.style.display = 'block';
            lampOn.style.display = 'none';
        }
    }

    this.lampCounter = function() {  //после 24ч повторяется цикл, не знала, как его остановить
        for(let i = 0; i <= 24; i++) {
            setInterval(() => console.log('потрачено ' + this.power*i + ' кВТ/ч'), 3000);
        }
    }
}

let lamp1 = new Lamp(0.06, 2);

lamp1.off()
console.log(lamp1)

let lamp2 = {
    color: 'white',
    power: '0.1'
}

lamp2.__proto__ = lamp1;

console.log(lamp2)

let Lamp3 = function(power, module) {
    this.power = power;
    this.module = module;
}

Lamp3.prototype = lamp1;
let lamp3 = new Lamp3('0.01', 'LED')

console.log(lamp3)

let Lamp4 = function(power) {
    Lamp.apply(this, arguments)
}
let lamp4 = new Lamp4('0.02', '3')

lamp4.on()
console.log(lamp4)

//lamp1.lampCounter()
