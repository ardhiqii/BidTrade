

export function truncateText(text,length){
    return text.length > 150 ? text.substring(0,150) + '...' : text
}