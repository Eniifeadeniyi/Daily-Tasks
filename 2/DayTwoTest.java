import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
public class DayTwoTest {

	@Test
	public void testThatGetFirstPetalsTakesInInput() {	
		DayTwo love = new DayTwo();			
		int result = love.getFirstPetals(5);		
		assertEquals(result,5);				
	}

	@Test
	public void testThatGetSecondPetalsTakesInInput() {	
		DayTwo love = new DayTwo();			
		int result = love.getSecondPetals(8);		
		assertEquals(result,8);				
	}


}