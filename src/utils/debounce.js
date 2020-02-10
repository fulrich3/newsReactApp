export const debounce = (func, wait, immediate, args) => {
    let timeout;

    return () => {
        const context = this;
        const callNow = immediate && !timeout;
        const later = () => {
            timeout = null;

            if(!immediate)
            // Function.apply(): appelle une fonction en lui passant une valeur this et des arguments sous forme d'un tableau (
                func.apply(context, args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow) 
            func.apply(context,args);
    }
}