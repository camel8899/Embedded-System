# Asynchronous IO techniques
## Requirements

RPi 3

Arduino UNO

Python
- SMBus
- RPi.GPIO

C
- wiringPi 

## Setup

connect Arduino to RPi following the table below:

|   RPi    | Arduino UNO |
| -------- | --------    |
| GPIO 2 (pin 3) (SDA) | Analog 4 (SDA)  |
| GPIO 3 (pin 5) (SCL) | Analog 5 (SCL)  |
| GPIO 17              | Digital 8       |
| GND                  | GND             |

## Usage

Load the `arduino-side-program.ino` on the Arduino. 

On RPi, to use C, just `make` and `sudo ./i2c-pi-arduino`, then type any legal value to communicate with the arduino. To use python, run `sudo python i2c-pi-arduino.py`. 

# 3D accelerator 
## Requirements

RPi 3

Arduino UNO

Python
- SMBus
- RPi.GPIO

C
- wiringPi

## Setup

connect ADXL345 to RPi

## Usage

To use C, just `make` and `sudo ./adxl345`, then the data of the sensor will be printed on the screen. To use python, run `sudo python i2c-pi-arduino.py`.
