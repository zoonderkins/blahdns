import os

inputFile = "gravity.list"
outputFile = "rpz.txt"

with open(inputFile, 'r') as f: # load file
    lines = f.read().splitlines()  # read lines
os.remove("rpz.txt")
with open(outputFile, 'w') as f:
    f.write('\n'.join([line + '  CNAME .' for line in lines]))
