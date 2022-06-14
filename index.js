describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
  function shout(string) {
    return string.toUpperCase()
  }

  describe('whisper(string)', function() {
    it('receives one argument and returns it in all lowercase', function() {
      expect(whisper('HELLO')).toEqual('hello');
    })
  })

  function whisper(string) {
   return string.toLowerCase()
  }


logshout(HELLO)
