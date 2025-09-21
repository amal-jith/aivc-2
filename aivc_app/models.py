from django.db import models

# Create your models here.


class Service(models.Model):
    title = models.CharField(max_length=255)  # e.g. "AIVC Investor Scorecard™"
    tagline = models.CharField(max_length=255, blank=True, null=True)  # e.g. "We Find Your Hidden AI Goldmine"
    key_outcome_title = models.CharField(max_length=100, default="Key Outcome:")
    key_outcome_description = models.TextField()  # e.g. long description paragraph
    image = models.ImageField(upload_to="services/", blank=True, null=True)  # background image

    def __str__(self):
        return self.title


class Deliverable(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="deliverables")
    description = models.CharField(max_length=255)  # e.g. "AI capability identification and market analysis"

    def __str__(self):
        return f"{self.service.title} - {self.description[:50]}"




class Contact(models.Model):
    fullname = models.CharField(max_length=150)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField()
    revenue = models.CharField(max_length=100, blank=True, null=True)
    referral = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.fullname} ({self.email})"



from django.db import models

class Testimonial(models.Model):
    text = models.TextField(help_text="The testimonial content")
    author = models.CharField(max_length=150, help_text="Name or designation of the person")
    css_class = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        help_text="Optional CSS class for styling (e.g., leader-card-1, leader-card-2)"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.author}: {self.text[:40]}..."
