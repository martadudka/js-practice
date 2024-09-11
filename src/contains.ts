export function contains(str: string, searchedCharacter: (character: string) => boolean): boolean {
  let i = 0;
  while (true) {
    if (i >= str.length) {
      break;
    }
    if (searchedCharacter(str[i])) {
      return true;
    }
    i++;
  }
  return false;
}