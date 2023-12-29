class SearchResult:
    def __init__(self, id: str, name: str, price: float, image_url: str):
        self.id = id
        self.name = name
        self.price = price
        self.image_url = image_url

    def __dict__(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "image_url": self.image_url,
        }

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "image_url": self.image_url,
        }
