'use client'

import mermaid from 'mermaid'
import { useEffect, useRef } from 'react'

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    // Base colors
    primaryColor: '#0EA5E9', // sky-500
    primaryTextColor: '#F8FAFC', // slate-50
    secondaryColor: '#3B82F6', // blue-500
    tertiaryColor: '#6366F1', // indigo-500
    
    // Backgrounds
    mainBkg: '#1E293B', // slate-800
    nodeBkg: '#334155', // slate-700
    
    // Text colors
    textColor: '#E2E8F0', // slate-200
    lineColor: '#94A3B8', // slate-400
    
    // Special elements
    errorBkgColor: '#EF4444', // red-500
    errorTextColor: '#F8FAFC', // slate-50
    
    // Notes and other elements
    noteBkgColor: '#475569', // slate-600
    noteTextColor: '#F1F5F9', // slate-100
    
    // Sequence diagram specific
    actorBkg: '#334155', // slate-700
    actorBorder: '#0EA5E9', // sky-500
    activationBkgColor: '#0EA5E9', // sky-500
    
    // Flowchart specific
    labelBackground: '#1E293B', // slate-800
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
  },
  sequence: {
    mirrorActors: false,
    bottomMarginAdj: 10,
    messageAlign: 'center',
  },
})

interface MermaidProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded()
    }
  }, [chart])

  return (
    <div className="mermaid my-8 p-4 rounded-lg bg-slate-800/50" ref={ref}>
      {chart}
    </div>
  )
}
