import { cn } from '../lib/utils'

const Container = ({ children, className }: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={cn('max-w-3xl mx-auto px-8 bg-white dark:bg-[#1F1F1F]' , className)}>
            {children}
        </div>
    )
}

export default Container