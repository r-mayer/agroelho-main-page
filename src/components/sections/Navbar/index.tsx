import Image from 'next/image'
import { WhatsAppLogo } from '../../../../public/whatsappLogo'

export const Navbar = () => {
  return (
    <div className="w-full bg-rose-50 px-4">
      <nav className="w-full flex justify-between max-w-7xl mx-auto py-2">
        <div className="w-full flex gap-x-2 items-center flex-1">
          <Image alt="" src="/logo-agroelho.png" width={50} height={50} className="mb-1 brightness-75 max-w-[35px] lg:max-w-full" />
          <p className="text-lg lg:text-2xl text-rose-700 font-bold">AGROELHO</p>
          <p className="text-sm hidden lg:block ml-8 text-slate-500">Lugar de pet feliz 🐶</p>
        </div>

        <div className="w-full flex items-center max-w-fit">
          <div className="w-full flex justify-end gap-x-12 text-sm items-center">
            <a
              href="#location"
              className="text-slate-800 border-b-2 hidden lg:block border-transparent hover:border-rose-500 hover:text-rose-700 hover:brightness-125 transition"
            >
              Localização
            </a>

            <a
              href="https://wa.me/27996112633"
              className="text-slate-50 text-sm lg:text-base flex items-center gap-x-2 hover:brightness-110 transition px-6 py-2 rounded bg-rose-700"
            >
              <p>Contato</p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
