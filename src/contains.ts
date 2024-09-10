export function contains(str: string, searchedCharacter: string): boolean {
  let i = 0;
  while (true) {
    if (i >= str.length) {
      break;
    }
    if (str[i] === searchedCharacter) {
      return true;
    }
    i++;
  }
  return false;
}