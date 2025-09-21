from django.shortcuts import render
from .models import Service, Contact, Testimonial
from django.core.mail import send_mail
from django.shortcuts import redirect
from django.contrib import messages

# Create your views here.

def home(request):

    testimonials = Testimonial.objects.all()
    context = {
        "testimonials": testimonials,
    }
    return render(request, "home.html", context)


def about(request):
    return render(request, "about.html")

def whatWeDo(request):

    services = Service.objects.prefetch_related("deliverables").all()

    context = {
        "services": services,
    }

    return render(request, "what-we-do.html", context)

def pursueSellers(request):
    return render(request, "pursue-for-buyers.html")

def pursueAcquirers(request):
    return render(request, "pursue-for-acquirers.html")

def exploreGE(request):
    return render(request,"explore-growth.html")



def send_contact(request):
    if request.method == "POST":
        fullname = request.POST.get("fullname")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        revenue = request.POST.get("revenue")
        referral = request.POST.get("referral")
        message = request.POST.get("message")

        # Save to database
        Contact.objects.create(
            fullname=fullname,
            phone=phone,
            email=email,
            revenue=revenue,
            referral=referral,
            message=message
        )

        subject = f"Contact Form Submission from {fullname}"
        body = f"""
        Full Name: {fullname}
        Phone: {phone}
        Email: {email}
        Revenue: {revenue}
        Referral: {referral}
        Message: {message}
        """

        send_mail(
            subject,
            body,
            email,  # reply-to address
            ["amaljith5828@gmail.com"],  # your email
        )

        messages.success(request, "✅ Thanks! Your message has been sent.")
        return redirect("aivc_app:home")  # back to homepage