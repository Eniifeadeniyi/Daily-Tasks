//import java.util.ArrayList;

public class DayThree {

public static void main(String[] args) {

System.out.print(splitString("Eniife is cool"));

}
	public static String splitString(String sentence) {
		//ArrayList<String> words = new ArrayList<String>();
		String[] words = sentence.split(",");
		for(String word : words) {
			return word;
		}
	return null;
	}	
}