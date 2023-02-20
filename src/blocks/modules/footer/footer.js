const footer = class Footer {
    constructor() {}
    copyText({text}) {
        navigator.clipboard.writeText(text)
    }
}

export default footer;