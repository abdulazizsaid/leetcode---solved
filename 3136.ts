function isValid(word: string): boolean {
    if (word.length < 3)
        return false;
    const vowels = new Set("aeiouAEIOU");
    let hasVowels = false;
    let hasCons = false;
    for (const c of word){
        if (!/[a-zA-Z0-9]/.test(c)){
                return false;
        }
        if (/[a-zA-Z]/.test(c)){
            if (vowels.has(c)){
                hasVowels = true;
            } else {
                hasCons = true;
            }
        }
    }
    return hasVowels && hasCons;
};