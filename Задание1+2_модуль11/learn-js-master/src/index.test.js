import {countDown} from "./index.js";

describe('test countDown', () => {
  it("countDown 3 to equal 321", () => {
    const result = countDown(3);
    expect(result).toBe('321');
  }),
  it("countDown 10 to equal 10987654321", () => {
    const result = countDown(10);
    expect(result).toBe('10987654321');
  }),
  it("countDown 'a' to equal Введено не число", () => {
    const result = countDown('a');
    expect(result).toBe('Введено не число');
  }),
  it("countDown '-10' to equal Введено отрицательное число", () => {
    const result = countDown(-10);
    expect(result).toBe('Введено отрицательное число');
  })

});
