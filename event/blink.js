import gpio from 'rpi-gpio';

const LED_PIN = 40;
let ledOn = true;
export const ledfunc = function () {
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
};


