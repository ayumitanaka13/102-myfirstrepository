let isRaining = true;
let isWinter = false;

if (isRaining) {
    console.log('better bring an umbrella');
} else if (!isWinter) {
    console.log('better bring your sweater');
} else if (isRaining && !isWinter) {
    console.log('better stay inside');
};