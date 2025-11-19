import java.util.ArrayList;

public class DayNineBreakfast {
public static void main(String[] args) {

System.out.print(removeEnemies(new String[] {"Ryan", "Kieran", "Jason", "Yous"}).toString());

}
public static ArrayList removeEnemies(String[] names) {
	ArrayList<String> friends = new ArrayList<String>();
	for(String name : names){
		if(name.length() == 4) friends.add(name);}
	return friends;
}

}