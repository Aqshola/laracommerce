export const is_number_dot_comma = /^[0-9,.]+$/;

export const replace_if_not_number_or_dot = /[^.\d]/g;

export const replace_only_allow_number_one_dot = /^(\d*\.?)|(\d*)\.?/g;

export const replace_formatted_money = /(\d)(?=(\d\d\d)+(?!\d))/g;

export function formatOnlyNumberWithOneDot(str: string) {
    return str
        .replace(replace_if_not_number_or_dot, "")
        .replace(replace_only_allow_number_one_dot, "$1$2");
}
