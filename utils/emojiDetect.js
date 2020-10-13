
const code1 = [
    {key: ":)", code: '\u{1F600}' },
    {key: ":(", code: '\u{1F61E}' },
    {key: ":P", code: '\u{1F61B}' },
    {key: ":D", code: '\u{1F603}' },
    {key: ":O", code: '\u{1F62E}' },
    {key: ":o", code: '\u{1F62E}' },
    {key: ";D", code: '\u{1F609}' },
    {key: "B-)", code: '\u{1F60E}' },
    {key: "B|", code: '\u{1F60E}' },
    {key: ">:(", code: '\u{1F621}' },
    {key: ":*", code: '\u{1F618}' },
    {key: "-_-", code: '\u{1F611}' },
    {key: "^_^", code: '\u{1F604}' },
    {key: "O:)", code: '\u{1F607}' },
    {key: ":/", code: '\u{1F615}' },
    {key: ":'(", code: '\u{1F622}' },
    {key: "(y)", code: '\u{1F600}' },
    {key: ":[", code: '\u{1F600}' },
    {key: ":|", code: '\u{1F610}' },
    {key: "<3", code: '\u{1F600}' },
]

export const replace = (text) => {
    
    code1.map(({key, code}, index)=>{
        text.replaceAll(key, code)
    })
    let res = text.replace(":(", "\u{1F610}")
    console.log(b)
    
}
