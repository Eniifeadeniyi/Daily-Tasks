def split_string(sentence):
	if isinstance(sentence,str):
		if not sentence.isdigit():
			return sentence.split()
	return "Invalid input!"


sentence = input("Enter a sentence: ")
print(split_string(sentence))