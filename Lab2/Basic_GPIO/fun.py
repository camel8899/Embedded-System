import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.IN)
GPIO.setup(18,GPIO.OUT)

while(True):
    if GPIO.input(4) == 0:
        GPIO.output(18,1)
        sleep(1)
        GPIO.output(18,0)

