import RPi.GPIO as GPIO
import time

PIN = 17

GPIO.setmode(GPIO.BCM)
GPIO.setup(PIN, GPIO.OUT)

for i in range(15):
    GPIO.output(PIN, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(PIN, GPIO.LOW)
    time.sleep(0.5)

GPIO.cleanup()
