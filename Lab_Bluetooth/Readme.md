# BLE programming
## Description
Using 2 RPi as BLE central and BLE sensor device, BLE central can read the information stored in the sensor.</br>
We use ADXL345 as our sensor.
## Requirements
* BLE central: [python 2.7][1] , [pygattlib][2]
* BLE sensor device: [node js][3] , [bleno][4]

[1]:https://www.python.org/
[2]:https://github.com/matthewelse/pygattlib
[3]:https://nodejs.org/en/
[4]:https://github.com/sandeepmistry/bleno

## Setups
Connect ADXL345 to RPi, this will use as a BLE sensor</br>
Put gatt.py script in BLE central</br>
Put main.js, ADXL345.js, characteristic.js **and bleno** in the same directory in BLE sensor device</br>
Make the BLE sensor scanable:

    (sensor) $ sudo hciconfig hci0 up
    (sensor) $ sudo hciconfig hci0 leadv 0
Make sure the BLE central can scan the sensor device, you should see the mac address of BLE sensor after you type:

    (central) $ sudo hcitool lescan
Modify the bluetooth address of device in gatt.py

## Usage
At sensor side:

    (sensor) $ sudo node main.js
    
At central side:

    (central) $ sudo python gatt.py
Then you can see the acceleration of x,y,z axis deteced by ADXL345 at BLE central, the unit is gravitational acceleration g.


 
