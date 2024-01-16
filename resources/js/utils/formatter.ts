import { replace_formatted_money } from "./regex";

export function formatNumberPrice(val: number) {
    return new Intl.NumberFormat("en-ID").format(val);
}

export function formatMoneyComma(val: string) {
    return val.replace(replace_formatted_money, "$1,");
}
