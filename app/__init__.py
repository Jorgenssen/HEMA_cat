from flask import Flask
from flask_cors import CORS
#from config import Config

app = Flask(__name__)
cors = CORS(app)
#app.config.from_object(Config)

from app import main
