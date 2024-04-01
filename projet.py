from flask import Flask, rendertemplate, request, jsonify

app = Flask(name)

events = []

@app.route('/')
def index():
    return rendertemplate('index.html')

@app.route('/addevent', methods=['POST'])
def addevent():
    event_data = request.get_json()
    events.append(event_data)
    return jsonify({'message': 'Event added successfully'})

@app.route('/get_events', methods=['GET'])
def get_events():
    return jsonify(events)

if __name == '__main':
    app.run(debug=True)
