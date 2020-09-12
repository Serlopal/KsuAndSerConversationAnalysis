from .. import app


@app.template_filter()
def id_to_title(id):
    """Convert a string to all caps."""
    words = id.split("_")
    words[0] = words[0].title()
    return " ".join(words)

