var expect = require("expect.js");
var clone = require("../src/index").clone;

describe("单元测试", function () {
  describe("test hello", function () {
    it("hello", function () {
      expect(1).to.equal(1);
    });
  });
});

describe("function clone", function () {
  describe("param data", function () {
    it("正确参数", function () {
      expect(clone("abc")).to.eql("abc");

      var arr = [1, [2]];
      var cloneArr = clone(arr);
      expect(cloneArr).not.to.equal(arr);
      expect(cloneArr).to.eql(arr);

      var obj = { a: { b: 1 } };
      var cloneObj = clone(obj);
      expect(cloneObj).not.to.equal(obj);
      expect(cloneObj).to.eql(obj);
    });
    it("边界参数", function () {
      expect(clone()).to.equal(undefined);
      expect(clone(undefined)).to.equal(undefined);
      expect(clone(null)).to.equal(null);
    });
  });
});
