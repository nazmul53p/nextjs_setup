// Common functions can be written and exported from here.
class Cookie {
    static getCookie(name: string): string | null {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

export const deepFreeze = (obj: { [x: string]: any }) => {
    // Freeze objects and nested objects deeply
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === "object") {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
};
    static setCookie(name: string, value: string, days: number): void {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    static deleteCookie(name: string): void {
        document.cookie =
            name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

export default Cookie;
