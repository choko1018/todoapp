export function makeId(length) {
    let result = " ";
    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charlength = chars.length;
    for (let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * charlength));
    }
    return result;
}