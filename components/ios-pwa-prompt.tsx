"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Share, Plus, X } from "lucide-react"

export function IOSPWAPrompt() {
  const [showIOSPrompt, setShowIOSPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false)

  useEffect(() => {
    // Preveri če je iOS naprava
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Preveri če je že v PWA načinu
    const standalone = window.matchMedia("(display-mode: standalone)").matches
    setIsInStandaloneMode(standalone)

    // Prikaži prompt za iOS uporabnike, ki niso v PWA načinu
    if (iOS && !standalone) {
      const timer = setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem("ios-pwa-prompt-seen")
        if (!hasSeenPrompt) {
          setShowIOSPrompt(true)
        }
      }, 15000) // Prikaži po 15 sekundah

      return () => clearTimeout(timer)
    }
  }, [])

  const dismissPrompt = () => {
    setShowIOSPrompt(false)
    localStorage.setItem("ios-pwa-prompt-seen", "true")
  }

  if (!isIOS || isInStandaloneMode || !showIOSPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-4">
      <Card className="bg-gradient-to-r from-blue-900/95 to-purple-900/95 border-blue-500/20 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-2 rounded-full flex-shrink-0">
              <Smartphone className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white mb-1">📱 Dodaj NXT Balkan na Home Screen</h3>
              <p className="text-sm text-gray-300 mb-3">
                Za prejemanje obvestil na iPhone dodaj aplikacijo na Home Screen:
              </p>

              <div className="space-y-2 text-xs text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-xs">1</span>
                  </div>
                  <span>Klikni Share gumb</span>
                  <Share className="h-3 w-3" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-xs">2</span>
                  </div>
                  <span>Izberi "Add to Home Screen"</span>
                  <Plus className="h-3 w-3" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-xs">3</span>
                  </div>
                  <span>Odpri aplikacijo iz Home Screen</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={dismissPrompt} size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Razumem
                </Button>
                <Button onClick={dismissPrompt} size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  Ne prikazuj več
                </Button>
              </div>
            </div>
            <Button
              onClick={dismissPrompt}
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white p-1 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
