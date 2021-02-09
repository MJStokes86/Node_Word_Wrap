const WordWrap = require("../app");

describe('Wrapper', () => {

    it('should an empty string when call with nothing', () => {
        expect(WordWrap.prototype.wrap("", 1)).toBe("");
    });

    it('should return the word if shorter than the space', () => {
        expect(WordWrap.prototype.wrap("word", 5)).toBe("word");
    });

    it('should split two words on the space', () => {
        expect(WordWrap.prototype.wrap("word word", 5)).toBe("word\nword");
    });

    it('should split three words on the space', () => {
        expect(WordWrap.prototype.wrap("word word word", 5)).toBe("word\nword\nword");
    });

    it('should break words before boundary', () => {
        expect(WordWrap.prototype.wrap("word word", 3)).toBe("wor\nd\nwor\nd");
    });

});