from gattlib import GATTRequester, GATTResponse

address = "B8:27:EB:AA:82:FA"
requester = GATTRequester(address)

data = requester.read_by_handle(0x000c)
print(data[0])


