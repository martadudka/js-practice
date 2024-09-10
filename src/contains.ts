export function contains(str: string): boolean {
    let i = 0;
    while (true) {
        if (i >= str.length) {
            break;
        }
        if (str[i] === ' ') {
            return true;
        }
        i++;
    }
    return false;
}