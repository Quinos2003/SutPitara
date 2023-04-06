from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager


# Create your models here.
class userManager(BaseUserManager):
    def create_user(self, firstName, lastName, email, password):
        if not email:
            raise ValueError("Users must have an email address.")
        if not firstName:
            raise ValueError("Users must have a first name.")
        if not lastName:
            raise ValueError("Users must have a last name.")
        user = self.model(
            email=self.normalize_email(email), firstName=firstName, lastName=lastName
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, firstName, lastName, email, password):
        user = self.create_user(
            email=self.normalize_email(email),
            firstName=firstName,
            lastName=lastName,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    firstName = models.CharField(max_length=64)
    lastName = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    objects = userManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["firstName", "lastName"]

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
    
class Product(models.Model):

    M = "M"
    F = "F"
    GENDER_CHOICES = (
        (M, 'Male'),
        (F, 'Female'),
    )
    smallImageURL = models.URLField()
    largeImageURL = models.URLField()
    shortTitle = models.CharField(max_length=64)
    longTitle = models.CharField(max_length=64)
    mrp = models.IntegerField()
    discount = models.IntegerField()
    quantity = models.IntegerField()
    description = models.CharField(max_length=64)
    tagline = models.CharField(max_length=64)
    category = models.CharField(max_length=1,
                  choices=GENDER_CHOICES,
                  default=M)