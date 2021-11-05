it('should calculate the monthly rate correctly', function () {
  let val = {
    amount: 5000,
    years: 5,
    rate: 5
  };
 expect(calculateMonthlyPayment(val)).toEqual('94.36');
});

it("should return a result with 2 decimal places", function() {
  let val = {
    amount: 10000,
    years: 10,
    rate: 10
  };
 expect(calculateMonthlyPayment(val)).toEqual('132.15');
});