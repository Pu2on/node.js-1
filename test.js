const request = require('supertest');
const app1 = require('./app1');
const app2 = require('./app2');

describe('Testy jednostkowe dla endpointów', () => {
  // Test dla zadania nr 1
  it('Powinien zwrócić poprawną strukturę JSON dla /recruitment/json-structure', async () => {
    const response = await request(app1).get('/recruitment/json-structure');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      list: [
        { name: 'item 1' },
        { name: 'item 2' },
        { name: 'item 21' },
        { name: 'item 3' },
        { name: 'item 10' }
      ],
      correctly_result: 21
    });
  });

  // Test dla zadania nr 2
  it('Powinien zwrócić poprawną strukturę JSON dla /recruitment/random-json-structure', async () => {
    const response = await request(app2).get('/recruitment/random-json-structure');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('list');
    expect(response.body).toHaveProperty('correctly_result');

    const { list, correctly_result } = response.body;
    expect(Array.isArray(list)).toBe(true);
    expect(typeof correctly_result).toBe('number');

    // Sprawdzanie poprawności zakresu długości listy
    expect(list.length).toBeGreaterThanOrEqual(20);
    expect(list.length).toBeLessThanOrEqual(1000);

    // Sprawdzanie poprawności elementów listy
    for (const item of list) {
      expect(item).toHaveProperty('name');
      expect(typeof item.name).toBe('string');
      expect(item.name).toMatch(/^item -?\d+$/);
    }

    // Sprawdzanie poprawności correctly_result
    let maxNumber = -Infinity;
    for (const item of list) {
      const number = parseInt(item.name.split(' ')[1]);
      if (!isNaN(number) && number > maxNumber) {
        maxNumber = number;
      }
    }
    expect(correctly_result).toBe(maxNumber);
  });
});
