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
	col1 = piclist[:6]
	col2 = piclist[6:12]
	col3 = piclist[12:]
	# piclist = glob.glob("static\img\photos\*.jpg")
	return render(request, 'thesite/photographs.html', {'col1':col1, 'col2':col2, 'col3':col3,})
