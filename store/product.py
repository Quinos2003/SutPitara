from django.db import models
from .category import Category


# class Products(models.Model):
# 	name = models.CharField(max_length=60)
# 	price = models.IntegerField(default=0)
# 	category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
# 	description = models.CharField(
# 		max_length=250, default='', blank=True, null=True)
# 	quantity = models.IntegerField()
# 	# description = models.CharField(max_length=64)
# 	tagline = models.CharField(max_length=64)
# 	image = models.ImageField(upload_to='uploads/products/')

# 	@staticmethod
# 	def get_products_by_id(ids):
# 		return Products.objects.filter(id__in=ids)

# 	@staticmethod
# 	def get_all_products():
# 		return Products.objects.all()

# 	@staticmethod
# 	def get_all_products_by_categoryid(category_id):
# 		if category_id:
# 			return Products.objects.filter(category=category_id)
# 		else:
# 			return Products.get_all_products()

class Products(models.Model):
    M = "M"
    F = "F"
    GENDER_CHOICES = (
        (M, 'Male'),
        (F, 'Female'),
    )
    image = models.ImageField(upload_to='uploads/products/')

    # smallImageURL = models.URLField()
    # largeImageURL = models.URLField()
    # image = models.URLField()
    # shortTitle = models.CharField(max_length=64)
    # longTitle = models.CharField(max_length=64)
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    mrp = models.IntegerField()
    price = models.IntegerField()
    # discount = models.IntegerField()
    category = models.CharField(max_length=1, choices=GENDER_CHOICES, default=M)
    color = models.CharField(max_length=64)
    avlSize = models.CharField(max_length=64)
    # quantity = models.IntegerField()
    no_items = models.IntegerField()
    rating = models.IntegerField()
    ratingCount = models.IntegerField()
    
    
    tagline = models.CharField(max_length=64)
    
    
    
    inStock = models.BooleanField(default=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    @staticmethod
    def get_products_by_id(ids):
        return Products.objects.filter(id__in=ids)

    @staticmethod
    def get_all_products():
        return Products.objects.all()

    @staticmethod
    def get_all_products_by_categoryid(category_id):
        if category_id:
            return Products.objects.filter(category=category_id)
        else:
            return Products.get_all_products()
