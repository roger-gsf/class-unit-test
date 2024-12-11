const { isPalindrome } = require('./palindrome');

test('should identify a simple palindrome', () => {
    expect(isPalindrome('arara')).toBe(true);
    expect(isPalindrome('dani')).toBe(false);
    expect(isPalindrome('reviver')).toBe(true);
});

test('should identify a palindrome with uppercase and lowercase letters', () => {
    expect(isPalindrome('Ana')).toBe(true);
    expect(isPalindrome('aNa')).toBe(true);
    expect(isPalindrome('DaNi')).toBe(false);
});

test('should identify a palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('Após a sopa.')).toBe(true);
    expect(isPalindrome('Quem tem boca, vaia Roma')).toBe(false);
});

test('returns false for invalid values', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(12321)).toBe(false);
});
