const sum = require('./sum');

test('La suma 3 + 6 es igual a 9', () => {
    expect(sum(3,6)).toBe(9);
})