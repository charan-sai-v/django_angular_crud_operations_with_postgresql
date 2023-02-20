from rest_framework import serializers
from .models import User

# User -> id, name, email, gender
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'gender')
        
