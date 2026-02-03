export function getCurrentTime() {
    const now = new Date();
    const today =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0");
    return today
}

export function getTextColor(bgColor) {
    // bgColor = "#RRGGBB"
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);

    // perceived brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128 ? "#ffffff" : "#000000";
}