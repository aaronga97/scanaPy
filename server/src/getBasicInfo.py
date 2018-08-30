import json
import subprocess

#arp -a | grep "(192.168.1.1)" | awk '{print $4}'
#Get network info and returns it as a json
def getNetworkBasicInfo():
	output = subprocess.check_output(["route", "-n"])

	output = output.split()

	defaultGateway = output[13]
	networkIp= output[20]
	netmask = output[22]

	json_data = json.dumps({})
	json_data = {"defaultGateway": defaultGateway, "networkIp": networkIp, "netmask": netmask}
	json_data = {"networkInfo": json_data}

	to_json = json.dumps(json_data)

	return to_json



