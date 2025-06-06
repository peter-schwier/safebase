describe('chai', function () {
  describe('.assert', function () {
    it('exists', function () {
      chai.assert(chai.assert);
    });
    it('is a Number (expected to fail)', function () {
      chai.isNumber(chai.assert);
    });
  });
});
