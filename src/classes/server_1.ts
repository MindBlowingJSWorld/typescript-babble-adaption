interface ClockInterface {
    tick(); 
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
/*let digiClock1 = new DigitalClock(10,11);
digiClock1.tick();*/


class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

/*let anlgClock1 = new AnalogClock(10,11);
anlgClock1.tick();*/

let digital = createClock(DigitalClock, 12, 17);

let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();
