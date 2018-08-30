#playground
from xml.dom import minidom
import json

def xmlToJson(pathToFile):
    path = "data"
    fileName = "singleScan"
    pathToFile = path+'/'+fileName+'.xml'               #PathToFile(eg. data/output.xml)

    adressInfoJson = [];
    portsInfoJson = [];                                 #Create empty array
    json_data = json.dumps({})                          #Create empty json

    xmldoc = minidom.parse(pathToFile)                  #Get xml from file
    itemList = xmldoc.getElementsByTagName('address')   #Grab address tag

    ipAddress = itemList[0].attributes['addr'].value    #Get 1st addr attrib(IP)
    macAddress = itemList[1].attributes['addr'].value   #Get 2nd add attrib(MAC)

    adressInfoJson.append({"ipAddress": ipAddress, "macAddress": macAddress})   # Add ipAddress and macAddress to dictionary

    ports = xmldoc.getElementsByTagName('port')             #Go to ports section

    for port in ports:

        protocolType = port.attributes['protocol'].value    #Get protocol Type
        portNumber = port.attributes['portid'].value        #Get port Id

        state = port.getElementsByTagName('state')              #Get state tag under port tag
        stateValue = state[0].attributes['state'].value         #Get state value of state tag (open/closed)

        service = port.getElementsByTagName('service')          #Get service tag under port tag
        serviceName = service[0].attributes['name'].value       #Get name of service (ssh/http)

        portsInfoJson.append({"portNumber": portNumber, "stateValue": stateValue, "serviceName": serviceName}) # Add each portInfo to dictionary

    json_data = {"addressInfo": adressInfoJson, "portsInfo": portsInfoJson} # Add each dictionary into a final json
    to_json = json.dumps(json_data)                             #Turn it into json

    return to_json

