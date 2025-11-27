import unittest
from day_one import *

class BreakfastTest(unittest.TestCase):
	def test_that_get_sentence_works(self):
		actual = get_sentence("eniife")
		expected = "ENIIFE"
		self.assertEqual(actual,expected)
	
	def test_that_get_sentence_only_takes_in_words(self):
		actual = get_sentence("12345")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_sentence("en11fe")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)