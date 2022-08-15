import gpio from 'rpi-gpio';

const LED_PIN = 40;
let ledOn = true;
let stopflag = false;
export const ledfunc = function (stopflag) {
    if (stopflag === false) {
        gpio.setup(LED_PIN, gpio.DIR_OUT, () => {
            setInterval(() => {
                if (ledOn) {
                    gpio.write(LED_PIN, false);
                    ledOn = false;
                }
                else {
                    gpio.write(LED_PIN, true);
                    ledOn = true;
                }
            }, 500);
        });
    }
    else if (stopflag === true) {
        gpio.setup(LED_PIN, gpio.DIR_OUT, pause);
    };

};

function pause() {
    setTimeout(closePins, 500);
}

function closePins() {
    gpio.destroy(function () {
        console.log('All pins unexported');
    });
}
