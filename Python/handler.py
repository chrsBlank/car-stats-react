from flask import Flask, jsonify, request,render_template # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

@app.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if (request.method == 'OPTIONS'):
        headers = {}
        headers["Access-Control-Allow-Origin"] = "*"
        headers["Access-Control-Allow-Methods"] = "POST"
        headers["Access-Control-Allow-Credentials"] = False
        headers["Access-Control-Max-Age"] = '86400'
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
        return jsonify(headers), 200
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']

        if username == 'admin' and password == 'admin':
            return 'token'
        return 'error',401

if __name__ == "__main__":
    #app.run(host='0.0.0.0', port='3002',debug = True, ssl_context=sslcontext)
    app.run(host='0.0.0.0', port='8520',debug = True)
    #app.run()