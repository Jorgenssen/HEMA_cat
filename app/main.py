#!/usr/bin/python
#-------------------------------------------------------------------------------------
#             FILE: fencer.py
#      DESCRIPTION: module providing basic routes (API)
#           AUTHOR: Nikita Tatiannikov, n.tatyannikov@gmail.com
#          COMPANY: Tramazzone
#          VERSION: 0.01
# VERSIONS HISTORY: 2018-09-21 (0.01) - initial skeleton
#-------------------------------------------------------------------------------------

#----------------------------
# Initialization and import
#----------------------------
from app import app
import hashlib
import json
# import requests
#from textwrap import dedent 
from time import time
#from uuid import uuid4
from flask import Flask, jsonify, request, render_template
from urllib.parse import urlparse

#----------------------------
# Routing
#----------------------------
@app.route('/', methods = ['GET'])
def root():
    # links to other pages
    pass

@app.route('/admin', methods = ['GET','POST'])
def admin():
    pass

@app.route('/operator', methods = ['GET','POST'])
def operator():
    pass

@app.route('/wizard', methods = ['GET','POST'])
def wizard():
    if request.method == 'POST':
        data = request.get_json()
        

    else:
        return render_template('wizard.html')

@app.route('/table', methods = ['GET'])
def table():
    pass

@app.route('/spectator', methods = ['GET'])
def spectator():
    pass
