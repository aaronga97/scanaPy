from flask import jsonify
from flask import Flask
from flask_cors import CORS
from singleScan import xmlToJson
from flask import request
from getConnectedHosts import getActiveHosts
from getBasicInfo import getNetworkBasicInfo

import subprocess

app = Flask(__name__)
CORS(app)

#Scan a single device, receive ip address
@app.route("/singleScan")
def hello():
	ip = request.args.get('ipToScan')
	path = "data"				#path where output will be saved
	fileName = "singleScan"			#file name of output
	pathToFile = path+"/"+fileName+".xml"	#create path to file
	sp = subprocess.check_call(["nmap", "-sS", "-T4", "-n", "-Pn", ip, "-oX", pathToFile])
	return xmlToJson(pathToFile)		#convert xml to json and return it

#Get every active host
@app.route("/getActiveHosts")
def summary():
	activeHosts = getActiveHosts("data/output.xml")
	return jsonify(activeHosts)

#Return basic network info
@app.route("/getBasicInfo")
def getInfo():
	return getNetworkBasicInfo()
