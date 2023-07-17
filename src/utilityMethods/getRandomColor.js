export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    const r = Math.floor(Math.random() * 128 + 128);
    const g = Math.floor(Math.random() * 128 + 128);
    const b = Math.floor(Math.random() * 128 + 128);

    color += r.toString(16);
    color += g.toString(16);
    color += b.toString(16);

    return color;
}
