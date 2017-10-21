from gattlib import DiscoveryService

service  = DiscoveryService()
devices = service.discover(10)
for add, name in devices.items():
    print("name: {}, address: {}".format(name,add))
