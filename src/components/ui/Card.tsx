interface CardProps{children:React.ReactNode;className?:string;id?:string}
export function Card({children,className="",id}:CardProps){return <div id={id} className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 shadow-soft ${className}`}>{children}</div>}
