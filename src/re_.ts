export function re_(pattern:RegExp|string, flags?:string):RegExp {
	return new RegExp(pattern, flags)
}
