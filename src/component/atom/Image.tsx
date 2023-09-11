import { cx } from "@/helper"
import { HTMLProps } from "react"

type ContainerProps = HTMLProps<HTMLImageElement>

const Image = ({ className, ...props }: ContainerProps) => {
    return (
        <div className={cx('overflow-hidden', className)}>
            <img alt="alt" {...props}/>
        </div>
    )
}

export default Image
