import boto3
import botocore
from boto.s3.key import Key
from urllib.request import urlopen
import pandas as pd
import urllib.request

#conn = S3Connection("ASIAVGQJT4RYFYCKCQN6", "a+PEKqGufECMaCqsCP8kcWtGjhcwnXjLwFuFiztp")
s3 = boto3.resource('s3')
#bucket = s3_connection.get_bucket('killer-demo-images', validate=False)
bucket = s3.Bucket('killer-demo-images')
exists = True
try:
    s3.meta.client.head_bucket(Bucket='mybucket')
except botocore.exceptions.ClientError as e:
    # If a client error is thrown, then check that it was a 404 error.
    # If it was a 404 error, then the bucket does not exist.
    error_code = e.response['Error']['Code']
    if error_code == '404':
        exists = False

filename = 'ecommerce_meta_data.csv'
df = pd.read_csv(filename)
url = []
start = 20000
batch_size = 5000
for i in range(start, start+batch_size, batch_size):
    print(f"Processing {i} to {i+batch_size} rows")
    batch = df[i:i+batch_size]
    batch = batch.fillna('')
    for id, row in batch.iterrows():
        #request = urllib.Request(row['s3_http'])
        #response = urlopen(row['s3_http'])
        #k = Key(bucket)
        #k.name = row['basename']
       # k.set_contents_from_string(response.read(), {'Content-Type': response.info().get_content_type()})
       # bucket.put_object(Key=row['basename'], Body=response.read(),ContentType=response.info().get_content_type())
        #bucket.upload_file(row['basename'],row['basename'])
        urllib.request.urlretrieve(row['s3_http'], "assets/" + row['basename'])
        #url.append(f"https://killer-demo-images.s3.amazonaws.com/{row['basename']}")
        #print(url)
        print(row['basename'])
    #batch['s3_http'] = url
    #batch.to_csv(f"ecommerce_meta_data_new_{start}.csv", encoding='utf-8', index=False)

