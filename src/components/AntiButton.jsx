export default function AntiButton({children, ...props})
{
    const className="px-2 py-1 text-xs md:text-base rounded-md bg-red-200 text-red-600 hover:bg-red-300 hover:text-red-700"
 
    return (<button 
        {...props} 
        className={className}>
        {children}
        </button>)
}