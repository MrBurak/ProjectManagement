export default function Button({children, ...props})
{
    const className="px-2 py-1 text-xs md:text-base rounded-md bg-green-600 text-green-50 hover:bg-green-700 hover:text-green-100"
 
    return (<button 
        {...props} 
        className={className}>
        {children}
        </button>)
}