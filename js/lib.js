export function calculateBonus(sales) {
    let total = 0;
    const limit = 10000;
    const bonus = 0.05;

    for (const sale of sales) {
        if (sale > limit){
            total = total +  sale - limit;
        }
        return limit
    }
    total = total * bonus;
    return total;
}