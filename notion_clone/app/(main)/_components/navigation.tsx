import { ChevronsLeft } from 'lucide-react'
import React, { ElementRef, useRef, useState } from 'react'

export const Navigation = () => {
    const isResizingRef = useRef(false)
    const sideBarRef = useRef<ElementRef<"aside">>(null)
    const navBarRef = useRef<ElementRef<"div">>(null)
    const [isResetting, setTsResetting] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <>
            <aside className='group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]'>
                <div role="button" className='h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition' >
                    <ChevronsLeft className='h-6 w-6' />
                </div>
                <div>
                    Action
                </div>
                <div className='mt-4'>
                    Documents
                </div>
                <div className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0' />
            </aside>
        </>
    )
}
