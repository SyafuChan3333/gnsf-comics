import { joinPath } from "@/libs/pathUtils";

export const base_url = import.meta.env.BASE_URL;
export const siteAbsPath = (...paths: readonly string[]) => joinPath(base_url, ...paths);
