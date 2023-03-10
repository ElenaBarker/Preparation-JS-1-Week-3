const names = ["Karin", "Fatemeh", "Luke", "Michael", "Douglas", "Jyoti"];
let shortNames = [];
for (element of names) {
    if (element.length < 6);
    {
        shortNames.push(element);
    }
}
console.log(shortNames);