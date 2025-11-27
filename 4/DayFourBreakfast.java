import java.util.Scanner;
public class DayFourBreakfast {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

System.out.print("Enter number to represent a month: ");

while(!input.hasNextInt()) {
    System.out.println("Invalid input!");
    System.out.print("Enter number to represent a month: ");
    input.nextLine();
}

int monthNumber = input.nextInt();
System.out.print(getMonthQuarter(monthNumber));
}

public static double getMonthQuarter(int month) {
	double quarter = Math.ceil(month / 3);
	if(month < 1 || month > 12) return 0;
	return quarter;
}

}
