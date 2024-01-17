export function fileUploadExtractor(list: FileList | null): File[] {
    if (!list) return [];
    const newList = [];

    for (let i = 0; i < list.length; i++) {
        newList.push(list[i]);
    }

    return newList;
}

export function fileImageUploadUrlExtractor(file: File) {
    return URL.createObjectURL(file);
}
