const _CONVERSION_UNIT = 1024;

export function hexToRgba(hex: string, alpha = 1) : any {
    if (!/#?([a-fA-F0-9]{2}){3}/.test(hex)) {
        return hex;
    }

    const [r, g, b] = hex.match(/[a-fA-F0-9]{2}/g)!.map(v => parseInt(v, 16));

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

}

export function bytesToString(bytes: number, decimals = 2): string {
    const k = _CONVERSION_UNIT;

    if (bytes < 1) return '0 Bytes';

    decimals = Math.floor(Math.max(0, decimals));
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const value = Number((bytes / Math.pow(k, i)).toFixed(decimals));

    return `${value} ${['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'][i]}`;
}