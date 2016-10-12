// Print Function
function printProperties(object:Object) {
	if(object) {
		var keys = Object.keys(object);

		for(let i=0; i<keys.length; i++) {
			console.log('{Key: '+ keys[i] + ', value: ' + object[keys[i]] + '}');
		}	
	}		
}

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };

// Somehow the old JS JSON format does not work here, 
// TODO : ?? Find our why    
/*
    let counter = <Counter>function(start: number) {
        interval: 123,
        reset: function() {
            console.log('dont do anything');
        }
    };
*/
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;