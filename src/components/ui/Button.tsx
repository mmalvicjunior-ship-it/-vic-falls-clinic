interface ButtonProps{children:React.ReactNode;variant?:"primary"|"secondary"|"outline";size?:"sm"|"md"|"lg";className?:string;onClick?:()=>void;type?:"button"|"submit"|"reset";disabled?:boolean}
export function Button({children,variant="primary",size="md",className="",onClick,type="button",disabled}:ButtonProps){
const v={primary:"bg-teal hover:bg-teal-dark text-white shadow-soft",secondary:"bg-navy hover:bg-navy-light text-white shadow-soft",outline:"border border-teal text-teal hover:bg-teal hover:text-white"};
const s={sm:"px-4 py-2 text-sm",md:"px-6 py-2.5 text-base",lg:"px-7 py-3 text-base"};
return <button type={type} onClick={onClick} disabled={disabled} className={`${v[variant]} ${s[size]} rounded-lg font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none disabled:opacity-50 ${className}`}>{children}</button>}
