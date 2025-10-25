import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
public class DayOneTest {

	@Test
	public void testThatASentenceIsCollected() {	
		DayOne breakfast = new DayOne();			
		String result = breakfast.getSentence("God is good.");		
		assertEquals(result, "God is good.");				
	}


	@Test
	public void testThatASentenceIsCollectedAndConvertedToUpperCase() {	
		DayOne breakfast = new DayOne();			
		String result = breakfast.convert("God is good.");		
		assertEquals(result, "GOD IS GOOD.");				












	}

}


