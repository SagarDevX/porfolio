import { cn } from '../lib/utils'

const Container = ({ children, className }: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={cn('max-w-3xl mx-auto px-8 bg-white dark:bg-black' , className)}>
            {children}
        </div>
    )
}

export default Container