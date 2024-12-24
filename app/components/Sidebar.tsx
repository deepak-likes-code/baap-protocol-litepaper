'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: 'Abstract', href: '#abstract' },
  { name: 'Core Components', href: '#core-components' },
  { name: 'Motivation', href: '#motivation' },
  { name: 'Protocol Architecture', href: '#architecture' },
  { name: 'Use Cases', href: '#use-cases' },
]

export default function Sidebar() {
  return (
    <>
      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 w-64 h-full border-r">
        <SidebarContent />
      </div>
    </>
  )
}

function SidebarContent() {
  return (
    <ScrollArea className="h-full py-6 px-4">
      <div className="mb-6 px-2">
        <h1 className="font-semibold tracking-tight">BAAP Litepaper</h1>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </ScrollArea>
  )
}

