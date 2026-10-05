export const base_url = import.meta.env.BASE_URL;

const RELATIVE_DUMMY_SCHEME = "relative://"

const joinPath = (head: string, ...paths: readonly string[]) => {
    let url: URL;
    try {
        url = new URL(head);
    } catch {
        url = new URL(`${RELATIVE_DUMMY_SCHEME}${head}`);
    }
    url = paths.filter(part => !["", "/"].includes(part)).reduce((acc, part) => {
        acc.pathname = [...acc.pathname.split("/"), ...part.split("/")].filter(part => !["", "/"].includes(part)).join("/");
        return new URL(`${acc}`);
    }, url);
    return String(url).replace(RELATIVE_DUMMY_SCHEME, "").replace(/^$/, head);
};

export const siteAbsPath = (...paths: readonly string[]) => joinPath(base_url, ...paths);
