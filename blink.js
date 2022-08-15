let gpio = require('rpi-gpio');

const LED_PIN = 40;
let ledOn = true;

gpio.setup(LED_PIN, gpio.DIR_OUT, () => {
    setInterval(() => {
        if (ledOn) {
            gpio.write(LED_PIN, false);
            ledOn = false;
            console.log("fugafuga");
        }
        else {
            gpio.write(LED_PIN, true);
            ledOn = true;
            console.log("hogehoge");
        }
    }, 500);
});

