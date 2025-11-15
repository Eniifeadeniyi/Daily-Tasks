import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
public class DayThreeTest {

	DayThree split;
	@BeforeEach
		void setup(){
			DayThree split = new DayThree ();}
	
	@Test
	public void TestThatSplitStringWorks() {
		ArrayList result = split.splitString("Cool girls");
		assertEquals(result, ["Cool girls"]);
	}

}		