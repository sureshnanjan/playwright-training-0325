describe('Insurance Premium', function () {
  describe('Premium for Senoir citizen is correct', function () {
    it('should return 10 when age is more than 60 male', function () {
      equal(calculate_premium(61, "M"), 10);
    });
    it('should return 10 when age is more than 60 female', function () {
      equal(calculate_premium(61, "F"), 10);
      const premium = calculate_premium(61, "F")
      premium.should.equal(10);
    });
  });
  describe('Premium for age less than 15', function () {
    it('should return 15 when age is less  than 15  female', function () {
      equal(calculate_premium(14, "F"), 15);
    });
    it('should return 15 when age is less  than 15  male', function () {
      equal(calculate_premium(14, "M"), 18);
    });
  });
  describe('Premium for age between 16 to 25', function () {
    it('should return 20 when age is between 16 to 25  female', function () {
      equal(calculate_premium(18, "F"), 20);
    });
    it('should return 20 when age is between 16 to 25  male', function () {
      equal(calculate_premium(18, "M"), 20);
    });
  });
});