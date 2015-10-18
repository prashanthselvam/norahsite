from django.shortcuts import render, redirect
import glob
import os


def base(request):
	return redirect('/home')

def home(request):
	return render(request, 'thesite/home.html', {})

def photographs(request):
	path="static/img/photos"
	piclist = os.listdir(path)
	namelist = []
	for pic in piclist:
		namelist.append(pic[:-4])
	newlist = zip(piclist,namelist)
	col1 = newlist[:6]
	col2 = newlist[6:12]
	col3 = newlist[12:]
	return render(request, 'thesite/photographs.html', {'col1':col1, 'col2':col2, 'col3':col3,})
