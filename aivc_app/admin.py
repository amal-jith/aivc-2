from django.contrib import admin
from .models import Service, Deliverable, Contact, Testimonial

# Register your models here.


class DeliverableInline(admin.TabularInline):
    model = Deliverable
    extra = 1  # how many empty rows to show by default


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "tagline")  # show in list view
    search_fields = ("title", "tagline")
    inlines = [DeliverableInline]  # add deliverables directly inside Service admin


@admin.register(Deliverable)
class DeliverableAdmin(admin.ModelAdmin):
    list_display = ("description", "service")
    search_fields = ("description",)
    list_filter = ("service",)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author', 'text', 'css_class', 'created_at')
    search_fields = ('author', 'text')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'email', 'phone', 'revenue', 'referral', 'created_at')
    search_fields = ('fullname', 'email', 'phone')
    list_filter = ('revenue', 'referral')