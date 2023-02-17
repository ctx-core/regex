/**
 * @param pattern{RegExp|string}
 * @param flags{string}
 * @returns {RegExp}
 */
export function re_(pattern, flags) {
	return new RegExp(pattern, flags)
}
