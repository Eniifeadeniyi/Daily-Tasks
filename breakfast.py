def get_sentence(sentence):
	for letters in sentence:
		if letters.isdigit():
			return"Invalid input!"

	return sentence.upper()

sentence = input("Enter a sentence: ")
print(get_sentence(sentence))