test('Deve conhecer os principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull(); // não pode ser null
    expect(number).toBe(10); // é 10?
    expect(number).toEqual(10); // é igual 10?
    expect(number).toBeGreaterThan(9); // é menor que 10
    expect(number).toBeLessThan(11); // é maior que 10
});
