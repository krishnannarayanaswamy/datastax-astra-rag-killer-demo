import pandas as pd

with open('movies.json', encoding='utf-8') as inputfile:
    df = pd.read_json(inputfile)

df.to_csv('movies.csv', encoding='utf-8', index=False)