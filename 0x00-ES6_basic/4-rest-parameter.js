export default function returnHowManyArguments(...args) {
    let count = 0;
    for (one in args) {
        count++;
    }
    return (count);
}