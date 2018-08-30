from subprocess import call
from xml.dom import minidom
import netifaces
import math

def getActiveHosts(pathToFile):
	resultDic = []
	#COnfiguramos la interfaz
	netifaces.ifaddresses("eth0")
	#Conseguimos la direccion ip, subnet y el default gateway
	ipAddress = netifaces.ifaddresses("eth0")[netifaces.AF_INET][0]["addr"]
	netmask = netifaces.ifaddresses("eth0")[netifaces.AF_INET][0]["netmask"]
	gws=netifaces.gateways()
	routerIP=gws['default'].values()[0][0]
	print routerIP
	#Conseguir el prefijo de la red
	octeto1= netmask[:netmask.find(".")];
	octeto2= netmask[netmask.find(".")+1:netmask.find(".",netmask.find(".") + 1)]
	octeto3= netmask[netmask.find(".",netmask.find(".") + 1)+1:netmask.find(".",netmask.find(".") + netmask.find(".") + netmask.find("."))]
	octeto4= netmask[netmask.find(".",netmask.find(".") + netmask.find(".") + netmask.find(".") + 1) + 1 :]
	#calculamos el prefijo
	prefijo = math.ceil(math.log((1 if (int(octeto1) == 0) else int(octeto1)),2.0) + math.log((1 if (int(octeto2) == 0) else int(octeto2)),2.0) + math.log((1 if (int(octeto3) == 0) else int(octeto3)),2.0) + math.log((1 if (int(octeto4) == 0) else int(octeto4)),2.0))
	print(prefijo)


	#Ejecutamos el comando para conseguir el archivo xml
	call(["nmap","-v","-sn",str(routerIP)+"/"+str(int(prefijo)),"-oX",pathToFile])
	#abrimos el archivo xml
	archivoXML = minidom.parse(pathToFile)
	#Conseguir tas las direcciones
	listaDirecciones = archivoXML.getElementsByTagName("host")
	#Imrpimimos las direcciones con un ciclo for
	for s in listaDirecciones:
		if(s.getElementsByTagName("status")[0].attributes["state"].value == "up"):
			#Condicion para no desplegar la direccion del mismo dispositivo
			if(s.getElementsByTagName("address")[0].attributes["addr"].value <> ipAddress):
				#Desplegamos las direcciones ip de los host que si esten connectados a la red
				IPAddress = s.getElementsByTagName("address")[0].attributes["addr"].value
				MACAddress = s.getElementsByTagName("address")[1].attributes["addr"].value
				try:
					vendor = s.getElementsByTagName("address")[1].attributes["vendor"].value
				except:
					vendor = "Unknown"
				resultDic.append({"ipAddress":IPAddress,"macAddress":MACAddress,"vendor":vendor})
	return {"addressInfo": resultDic}

#print getActiveHosts("data/output.xml")
