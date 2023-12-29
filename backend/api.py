import logging
from flask import Flask, jsonify, request
from search_products import search
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/health", methods=["GET"])
def health():
    response = {"status": "Backend is healthy."}
    return jsonify(response), 200


@app.route("/api/search_products", methods=["POST"])
def search_products():
    data = request.get_json()
    app.logger.debug(f"Data recieved: {data}")
    query = data.get("query")
    filters = data.get("filters")
    gender = data.get("gender")
    personal_preferences = data.get("personalPreferences")
    favourites = data.get("favourites")
    style = data.get("style")

    results = search(
        query=query,
        filters=filters,
        gender=gender,
        personal_preferences=personal_preferences,
        favourites=favourites,
        style=style,
    )

    
    response = {"results": [r.to_dict() for r in results]}
    app.logger.debug(f"Results recieved: {response}")
    return response, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=True)


if __name__ != "__main__":
    gunicorn_logger = logging.getLogger("gunicorn.error")
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)
