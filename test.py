import os

def photographs(path):
	path="static/img/photos"
	piclist = os.listdir(path)
	namelist = []
	for pic in piclist:
		namelist.append(os.path.splitext(img.filename)[0]
	col1 = piclist[:6]
	col2 = piclist[6:12]
	col3 = piclist[12:]
	newlist = zip(col1, namelist)
	print newlist[0][1]

photographs("path")
