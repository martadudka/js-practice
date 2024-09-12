export function contains(str: string, searchedCharacter?: string | ((character: string) => boolean)): boolean {
  if (searchedCharacter === undefined) {
    searchedCharacter = ' ';
  }

  let i = 0;
  while (true) {
    if (i >= str.length) {
      break;
    }
    if (typeof searchedCharacter === "function") {
      if (searchedCharacter(str[i])) {
        return true;
      }
    } else if (str[i] === searchedCharacter) {
      return true;
    }
    i++;
  }
  return false;
}
