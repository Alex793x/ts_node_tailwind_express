import fs from "fs"

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

interface Config {
    [key: string]: string | undefined;      // This is equilevant to unlimitted tags and addons to the config
}

export function readPage(path: string) {
    return fs.readFileSync(path).toString();
}

export function renderPage(page: string, config: Config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle ?? "Node Cookbook")
                 .replace("$CSS_LINKS$", config.CSSLinks ?? "")
     + page
     + footer;
}