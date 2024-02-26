from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

events = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_event', methods=['POST'])
def add_event():
    event_data = request.get_json()
    events.append(event_data)
    return jsonify({'message': 'Event added successfully'})

@app.route('/get_events', methods=['GET'])
def get_events():
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
