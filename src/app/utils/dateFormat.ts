

export default function dateFormat(date: Date | string): string {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    

    if (date instanceof Date) {
        return new Date(date).toLocaleDateString('en-IN', options);
    } else {
        return "Date not found"
    }   
}