//Begin unit testing here with opening "describe() function"
describe("The specification for basic math", function() {

  // Write a unit test to check for the existence of add()
  it("should have an add function", function() {
    expect(add).toBeDefined();
  });
  // Write a unit test that will verify the expected output of add()
  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });


  // Write a unit test to check for the existence of subtract()
  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });
  // Write a unit test that will verify the expected output of subtract()
  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });


  // Write a unit test to check for the existence of multiply()
  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });
  // Write a unit test that will verify the expected output of multiply()
  it("should multiply two integers", function() {
    expect(multiply(7, 5)).toBe(35);
  });


  // Write a unit test to check for the existence of divide()
  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });
  // Write a unit test that will verify the expected output of divide()
  it("should divide two integers", function() {
    expect(divide(35, 5)).toBe(7);
  });


  // Write a unit test to check for the existence of square()
  it("should have a square function", function() {
    expect(square).toBeDefined();
  });
  // Write a unit test that will verify the expected output of square()
  it("should square an integer", function() {
    expect(square(5)).toBe(25);
  });


  // Write a unit test to check for the existence of squareRoot()
  it("should have a squareRoot function", function() {
    expect(squareRoot).toBeDefined();
  });
  // Write a unit test that will verify the expected output of squareRoot()
  it("should squareRoot an integer", function() {
    expect(squareRoot(25)).toBe(5);
  });
});