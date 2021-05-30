export function re_(pattern:RegExp|string, flags?:string) {
	return new RegExp(pattern, flags)
}
