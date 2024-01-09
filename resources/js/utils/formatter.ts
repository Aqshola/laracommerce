export function formatNumberPrice(val: number) {
    return new Intl.NumberFormat("en-ID").format(val);
}
