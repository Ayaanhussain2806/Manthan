from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib, pickle

MODEL_PATH = "ml\tfidf_vectorizer.pkl"

try:
    model = joblib.load(MODEL_PATH)
except Exception:
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)

app = Flask(__name__)
CORS(app)

def summarize_text(text: str) -> str:
    # TODO: adapt to your actual model
    if hasattr(model, "summarize"):
        return model.summarize(text)
    if hasattr(model, "predict"):
        return model.predict([text])[0]
    if callable(model):
        return model(text)
    return "Summarization not implemented for this model type."

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' in request"}), 400
    text = data["text"]
    summary = summarize_text(text)
    return jsonify({"summary": summary})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
