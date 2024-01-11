/* eslint-disable @typescript-eslint/no-explicit-any */
export function Optional(
	value: any,
	safe_value: any,
	forceSaveValue?: boolean
) {
	if (forceSaveValue) {
		if (!safe_value) {
			throw new Error(
				`Must not be undefined or null the safe ${safe_value} for ${value}`
			);
		}
	}
	if (isEmpty(value)) {
		return safe_value;
	}
	return value;
}

export function isEmpty(value: any) {
	if (value === undefined) return true;
	if (value instanceof String && value.trim() === "") return true;
	if (value instanceof String && value.length <= 0) return true;
	if (value instanceof Array && value.length <= 0) return true;
	if (!value) return true;
	return false;
}
