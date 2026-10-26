const RELATIVE_DUMMY_SCHEME = "relative://"

export const joinPath = (head: string, ...paths: readonly string[]) => {
    let url: URL;
    try {
        url = new URL(head);
    } catch {
        url = new URL(`${RELATIVE_DUMMY_SCHEME}${head}`);
    }
    const is_url_part = (part: string) => !["", "/"].includes(part);
    url = paths.filter(is_url_part).reduce((acc, part) => {
        acc.pathname = [...acc.pathname.split("/"), ...part.split("/")].filter(is_url_part).join("/");
        return new URL(`${acc}`);
    }, url);
    return String(url).replace(RELATIVE_DUMMY_SCHEME, "").replace(/^$/, head);
};
