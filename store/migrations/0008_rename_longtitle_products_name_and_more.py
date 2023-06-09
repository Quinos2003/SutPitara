# Generated by Django 4.2.2 on 2023-06-22 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0007_delete_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='longTitle',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='products',
            old_name='quantity',
            new_name='no_items',
        ),
        migrations.RemoveField(
            model_name='products',
            name='discount',
        ),
        migrations.RemoveField(
            model_name='products',
            name='largeImageURL',
        ),
        migrations.RemoveField(
            model_name='products',
            name='shortTitle',
        ),
        migrations.RemoveField(
            model_name='products',
            name='smallImageURL',
        ),
        migrations.AddField(
            model_name='products',
            name='avlSize',
            field=models.CharField(default=32, max_length=64),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='color',
            field=models.CharField(default=1, max_length=64),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='price',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='rating',
            field=models.IntegerField(default=4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='ratingCount',
            field=models.IntegerField(default=46),
            preserve_default=False,
        ),
    ]
