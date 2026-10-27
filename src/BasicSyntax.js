export function romanToInteger(str) {
    let result = 0;
    const ruman ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000};
    for (let i=0;i<str.length;i++){
        const cur = ruman[str[i]];
        const next=ruman[str[i+1]];
        if (next > cur) {
      result -= cur;
    } else {
      result += cur;
    }
  }

    return result;
}
