const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When the grade is between 95.00 - 100, then the result will be "O - Outstanding"', () => {
    // Arrange
    const grade1 = 95.00
    const grade2 = 98.00
    const grade3 = 100

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("O - Outstanding")
    expect(scale2).toEqual("O - Outstanding")
    expect(scale3).toEqual("O - Outstanding")
  });
  it('When the grade is between 90.00 - 94.99, then the result will be "V - Very Good"', () => {
    // Arrange
    const grade1 = 90.00
    const grade2 = 93.15
    const grade3 = 94.99

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("V - Very Good")
    expect(scale2).toEqual("V - Very Good")
    expect(scale3).toEqual("V - Very Good")
  });
  it('When the grade is between 85.00 - 89.99, then the result will be "G - Good"', () => {
    // Arrange
    const grade1 = 85.00
    const grade2 = 87.15
    const grade3 = 89.99

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("G - Good")
    expect(scale2).toEqual("G - Good")
    expect(scale3).toEqual("G - Good")
  });
  it('When the grade is between 80.00 - 84.99, then the result will be "S - Satisfactory"', () => {
    // Arrange
    const grade1 = 80.00
    const grade2 = 82.15
    const grade3 = 84.99

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("S - Satisfactory")
    expect(scale2).toEqual("S - Satisfactory")
    expect(scale3).toEqual("S - Satisfactory")
  });
  it('When the grade is between 75.00 - 79.99, then the result will be "N - Needs Improvement"', () => {
    // Arrange
    const grade1 = 75
    const grade2 = 76.1201
    const grade3 = 79.99

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("N - Needs Improvement")
    expect(scale2).toEqual("N - Needs Improvement")
    expect(scale3).toEqual("N - Needs Improvement")
  });
  it('When the grade is between 0.00 - 74.99, then the result will be "D - Did not Meet Expectaton"', () => {
    // Arrange
    const grade1 = 0.00
    const grade2 = 65.01
    const grade3 = 74.99

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("D - Did not Meet Expectaton")
    expect(scale2).toEqual("D - Did not Meet Expectaton")
    expect(scale3).toEqual("D - Did not Meet Expectaton")
  });
  it('When the grade is an invalid grade, then the result will be "Invalid grade"', () => {
    // Arrange
    const grade1 = -75.0
    const grade2 = 105.00
    const grade3 = -52

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("Invalid grade")
    expect(scale2).toEqual("Invalid grade")
    expect(scale3).toEqual("Invalid grade")
  });
  it('When the grade is a non-numerical value, then the result will be "Invalid grade"', () => {
    // Arrange
    const grade1 = "--==-"
    const grade2 = "dsajfhk"
    const grade3 = "Hi"

    // Act
    const scale1 = gradeClassifier(grade1)
    const scale2 = gradeClassifier(grade2)
    const scale3 = gradeClassifier(grade3)

    // Assert
    expect(scale1).toEqual("Invalid grade")
    expect(scale2).toEqual("Invalid grade")
    expect(scale3).toEqual("Invalid grade")
  });

});
