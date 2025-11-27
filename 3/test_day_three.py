import unittest
from day_three import *

class TestSplit(unittest.TestCase):
	def test_that_split_string_works(self):
		actual = split_string("Eniife is really cool")
		expected = ["Eniife", "is", "really", "cool"]
		self.assertEqual(actual,expected)

	def test_that_split_string_only_takes_in_words(self):
		actual = split_string(12)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = split_string("12")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
