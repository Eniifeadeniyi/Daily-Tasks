import unittest
from day_two import *

class TestLove(unittest.TestCase):
	def test_get_petals_works(self):
		actual = get_petals(5,8)
		expected = True
		self.assertEqual(actual,expected)
		actual = get_petals(8,5)
		expected = True
		self.assertEqual(actual,expected)
		actual = get_petals(6,8)
		expected = False
		self.assertEqual(actual,expected)
		actual = get_petals(5,7)
		expected = False
		self.assertEqual(actual,expected)
	

	def test_that_get_petals_only_takes_in_int(self):
		actual = get_petals("str",8)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals(8,"str")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals("str","eight")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals("str",8.2)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals(8.2,"str")
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals(8.2,2.5)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)

	def test_that_get_petals_only_takes_in_positive_int(self):
		actual = get_petals(-2,5)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)
		actual = get_petals(2,-5)
		expected = "Invalid input!"
		self.assertEqual(actual,expected)




