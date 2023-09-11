import { SVGProps } from "react";

const Messenger = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="m12 0c-6.627 0-12 4.974-12 11.111.035 3.55 1.774 6.686 4.438 8.633l.031.021v4.235l4.088-2.242c1.031.295 2.215.464 3.439.464h.004c6.627 0 12-4.975 12-11.11s-5.373-11.112-12-11.112zm1.191 14.963-3.055-3.263-5.963 3.26 6.559-6.96 3.131 3.259 5.889-3.259z"/>
        </svg>
    )
}

export default Messenger
