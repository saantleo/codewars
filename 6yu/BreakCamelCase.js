// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.replace(/[A-Z]/g, (match) => ` ${match}`);
}

console.log(solution("camelCasing"))
console.log(solution("camelCasingTest"))
