def get_sentence(sentence):
	if sentence.isdigit():
		return"Invalid input!"

	return sentence.upper()

sentence = input("Enter a sentence: ")
print(get_sentence(sentence))