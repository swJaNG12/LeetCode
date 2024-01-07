function repeatedSubstringPattern(s: string): boolean {
    const str: string = (s + s).slice(1,-1);
    return str.includes(s); 
};