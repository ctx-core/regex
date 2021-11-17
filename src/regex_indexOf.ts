/**
 * @see {@link https://github.com/capaj/index-of-regex}
 */
/**
 * indexOf with regex
 */
export function regex_indexOf(str: string, regex: RegExp, in_startpos?: number):number {
	const startpos = in_startpos || 0
	const indexOf = str.substring(startpos).search(regex)
	return (
		(indexOf >= 0)
		? (indexOf + startpos)
		: indexOf
	)
}
export {
	regex_indexOf as indexOf__regex
}
