public class DayEightBreakfast {
    public static void main(String[] args) {
  System.out.print(countDistinct(new int[] {1,1,2,5,3,3}));  
}

public static int countDistinct(int[] input) {
    int occur = 0;
	for(int count = 0; count < input.length; count++) {
		for(int counter = 0; counter < input.length; counter++) {
			occur = 1;
			if(input[count] == input[counter]) occur++;}
		}
	return occur;
}

}
