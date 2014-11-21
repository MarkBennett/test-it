describe("greeter", function() {
  var e;

  beforeEach(function() {
    loadFixtures('greeter.html');
    init();

    e = {
      preventDefault: function() {}
    };
  });

  it("should set the greeting when the button is clicked", function(done) {
    handleBtnClick(e).then(function() {
      var greeting = elem.innerHTML;

      expect(greeting).toEqual("Hello, ExchangeJS!");
      done();
    });
  });

  it("should call greet() when the button is pressed", function() {
    greet = jasmine.createSpy("greet").and.returnValue({ then: function() {} });

    handleBtnClick(e);

    expect(greet).toHaveBeenCalled();
  });
});
