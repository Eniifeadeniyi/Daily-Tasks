import unittest
from breakfast import *

class BreakfastTest(unittest.TestCase):
	def test_that_get_sentence_works(self):
		actual = get_sentence("eniife")
		expected = "ENIIFE"
		self.assertEqual(actual,expected)