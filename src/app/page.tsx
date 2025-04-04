import React from 'react'
import './globals.css'
import { WhatsAppLogo } from '../../public/whatsappLogo'
import { Navbar } from '@/components/sections/Navbar'
import { Header } from '@/components/sections/Header'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Header />

      <div className="fixed right-8 bottom-8 flex group items-center">
        <a
          href="https://wa.me/27996112633"
          className="text-slate-50 flex text-sm w-14 h-14 items-center justify-center gap-x-2 hover:brightness-110 transition rounded-full bg-green-500"
        >
          <WhatsAppLogo />
        </a>
      </div>
    </main>
  )
}
