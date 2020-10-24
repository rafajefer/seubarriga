test('Devo conhecer os principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull(); // não pode ser null
    expect(number).toBe(10); // é 10?
    expect(number).toEqual(10); // é igual 10?
    expect(number).toBeGreaterThan(9); // é menor que 10
    expect(number).toBeLessThan(11); // é maior que 10
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'John', mail: 'john@mail.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'John');
    expect(obj.name).toBe('John');

    const obj2 = { name: 'John', mail: 'john@mail.com' };
    expect(obj).toEqual(obj2);
    expect(obj).toEqual(obj);
});
