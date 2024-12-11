const { isPalindrome } = require('./palindrome');

test('deve identificar um palíndromo simples', () => {
    expect(isPalindrome('arara')).toBe(true);
    expect(isPalindrome('dani')).toBe(false);
    expect(isPalindrome('reviver')).toBe(true);
});

test('deve identificar um palíndromo com letras maiúsculas e minúsculas', () => {
    expect(isPalindrome('Ana')).toBe(true);
    expect(isPalindrome('aNa')).toBe(true);
    expect(isPalindrome('DaNi')).toBe(false);
});

test('deve identificar um palíndromo com espaços e pontuação', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('Após a sopa.')).toBe(true);
    expect(isPalindrome('Quem tem boca, vaia Roma')).toBe(false);
});

test('retorna false para valores inválidos', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(12321)).toBe(false);
});