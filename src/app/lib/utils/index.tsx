// Common functions can be written and exported from here.

export const deepFreeze = (obj: { [x: string]: any }) => {
    // Freeze objects and nested objects deeply
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === "object") {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
};
