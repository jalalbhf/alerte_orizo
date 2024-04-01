# On a commenceé par l'importation des modules dont on avait besoin en passant par Flask
from flask import Flask, rendertemplate, request, jsonify
# Du coup on a initialisé Flask
app = Flask(name)

events = []
# A définit la route principale et on renvois au contenu de la page en index.html lorsque l'on accède a la racine
@app.route('/')
def index():
    return rendertemplate('index.html')

@app.route('/addevent', methods=['POST'])
def addevent():
    event_data = request.get_json()
    events.append(event_data)
    return jsonify({'message': 'Event added successfully'})
# Route pour obtenir la liste des événements
@app.route('/get_events', methods=['GET'])
def get_events():
    return jsonify(events)

if __name == '__main':
    app.run(debug=True)
