from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth

# Create your views here.
def index(request):
    return render(request,'index.html')

def signin(request):
    
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        print(email)
        if User.objects.filter(email=email).exists():
                
                
                #  Access the username
                username = User.objects.get(email=email)#get the usernameUser.objects.get(email=email).username
                print(User.objects.get(email=email))
                # print(username)
                auth_verified = auth.authenticate(username=username, password=password)
                print(auth_verified)
                if auth_verified is not None:
                    auth.login(request,auth_verified)#login=session or cookies
              
                    return redirect(index)

                else:
                    context = {
                        'msg':'invalid email or password'
                    }
                    return render(request, 'signin.html',context)
                   
        else:
            context = {
                    'msg':'email doesnot  exists'
                }
            return render(request, 'signin.html',context)
        
    return render(request,'signin.html')

#  n=User.objects.get(username=request.user)

def register(request):
    if request.method=='POST':
        email = request.POST['email']
        username=request.POST['username']
        password = request.POST['password']
     
        if email==User.objects.filter(email=email).exists():
            context={
                'msg':"email already registered"
            }
            return render(request,'register.html',context)
        else:
            if username==User.objects.filter(username=username).exists():
                context={
                    'msg':"Username already exist"
                }
                return render(request,'register.html',context)
            else:
                    newuser=User.objects.create_user(email=email,username=username,password= password)
                    newuser.save()
                    return redirect(signin)
    return render(request,'register.html')

def intro_content(request):
    return render(request,'intro_content.html')

def content1(request):
    return render(request,'content1.html')

def content2(request):
    return render(request,'content2.html')

def content3(request):
    return render(request,'content3.html')

def content4(request):
    return render(request,'content4.html')

def content5(request):
    return render(request,'content5.html')

def intro_quiz(request):
    return render(request,'intro_quiz.html')

def quiz(request):
    return render(request,'quiz.html')

def quiz_pass(request):
    return render(request,'quiz_pass.html')

def get_certificate(request):
    return render(request,'get_certificate.html')

def quiz_fail(request):
    return render(request,'quiz_fail.html')

def final(request):
    return render(request,'final.html')

def certificate(request):
    n=User.objects.get(username=request.user)
    context={'name':n}
    return render(request,'certificate.html',context)