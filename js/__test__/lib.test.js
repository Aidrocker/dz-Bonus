import {calculateBonus} from "../lib";

test('function must work, i hope ', () =>{

    const sales = [12000, 8000, 10000, 15000, 2000 ];
    const expected = 10000;
    const result = calculateBonus(sales);

    expect(result).toBe(expected)


});