import random

def get_petals(first_number,second_number):
	if type(first_number) == int and type(second_number) == int:
		if first_number >= 0 and second_number >= 0:
			if first_number % 2 == 0 and second_number % 2 != 0:
				return True
			if first_number % 2 != 0 and second_number % 2 == 0:
				return True
			else:
				return False	
		else:
			return "Invalid input!"
	else:
		return "Invalid input!"
	


first_number = input("Enter the number of petals on your flower: ")
second_number = input("Enter the number of petals on your partner's flower: ")
if first_number.isdigit() and second_number.isdigit():
	print(get_petals(int(first_number),int(second_number)))
else:
	print(get_petals(first_number,second_number))