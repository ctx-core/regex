/**
 * @see {@link https://github.com/capaj/index-of-regex}
 */
/**
 * indexOf with regex
 */
export function regex_indexOf(str, regex, in_startpos) {
    const startpos = in_startpos || 0;
    const indexOf = str.substring(startpos).search(regex);
    return ((indexOf >= 0)
        ? (indexOf + startpos)
        : indexOf);
}
export { regex_indexOf as indexOf__regex };
//# sourceMappingURL=src/regex_indexOf.js.map