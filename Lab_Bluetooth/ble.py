import bluetooth as bt
from bluetooth.ble import DiscoveryService

def bluetooth_classic_scan(timeout=10):
    devs = bt.discover_devices(duration=scansec, flush_cache=True,\
            lookup_names=True )
    print('found {} Bluetooth (non-BLE) devices in pairing mode:'.format(len(devs)))

    if devs:
        print(devs)
        for pair in devs:
            print('{}   {}'.format(pair[0],pair[1]))
    return devs

def bluetooth_low_energy_scan(timeout=10):
    svc = DiscoveryService()
    devs = svc.discover(timeout)
    print('found {} Bluetooth Low Energy (Smart) devices:'.format(len(devs)))
    if devs:
        for u,n in devs.items():
            print('{}   {}'.format(u,n))
    return devs


if __name__ == '__main__':
    scansec = 5 #how long to scan for (seconds)
    bluetooth_low_energy_scan(scansec)
