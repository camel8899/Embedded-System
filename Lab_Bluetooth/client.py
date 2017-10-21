import bluetooth
from time import sleep

bd_addr = "B8:27:EB:CB:43:19"

port = 1

sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
print(sock.connect((bd_addr, port)))

while(True):
    send_string = input("Send a message:")
    sock.send(send_string)
    if send_string == 'stop':
        break   
    sleep(1)

sock.close()
