import { forwardRef } from "react"


const TextArea = forwardRef(function TextArea({...props}, ref)
{
    const inputClasses="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return(<textarea ref={ref} className={inputClasses} {...props} />)
})

export default TextArea