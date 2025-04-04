import Image from 'next/image'
import { OpenModalIcon } from '../../../../public/openModalIcon'
import { VetIIcon } from '../../../../public/VetIIcon'
import { DogIcon } from '../../../../public/DogIcon'
import { LocationIcon } from '../../../../public/LocationIcon'
import { ShowerIcon } from '../../../../public/ShowerIcon'
import { ClockIcon } from '../../../../public/ClockIcon'

export const Header = () => {
  return (
    <>
      <div className="w-full pt-16 pb-8 relative">
        <div className="w-full max-w-7xl mx-auto flex gap-x-8">
          <div className="w-full flex flex-col justify-center gap-y-1 text-slate-800 z-40">
            <h1 className="text-7xl max-w-[620px] font-medium mb-8">
              O <span className="text-rose-700">melhor lugar</span> para seu pet
            </h1>

            <div className="flex gap-x-8 items-center">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-center gap-x-2 max-w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="green" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <p>(27) 99611-2633</p>
                </div>

                <div className="flex items-center justify-center gap-x-2 max-w-fit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2301_253)">
                      <path
                        d="M13.0933 14.1666C11.4 15.8666 7.50665 14.72 4.42665 11.6066C1.34665 8.4933 0.133312 4.59996 1.83331 2.90663L3.68665 1.04663L7.26664 4.62663L5.93331 5.95996C5.66542 6.23187 5.51525 6.59826 5.51525 6.97996C5.51525 7.36167 5.66542 7.72806 5.93331 7.99996L7.99998 10.0666C8.27217 10.3365 8.63998 10.488 9.02331 10.488C9.40664 10.488 9.77445 10.3365 10.0466 10.0666L11.38 8.7333L14.96 12.3133L13.0933 14.1666Z"
                        stroke="black"
                        stroke-miterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2301_253">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>(27) 3325-9042</p>
                </div>
                <div className="flex items-center justify-center gap-x-2 max-w-fit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2301_253)">
                      <path
                        d="M13.0933 14.1666C11.4 15.8666 7.50665 14.72 4.42665 11.6066C1.34665 8.4933 0.133312 4.59996 1.83331 2.90663L3.68665 1.04663L7.26664 4.62663L5.93331 5.95996C5.66542 6.23187 5.51525 6.59826 5.51525 6.97996C5.51525 7.36167 5.66542 7.72806 5.93331 7.99996L7.99998 10.0666C8.27217 10.3365 8.63998 10.488 9.02331 10.488C9.40664 10.488 9.77445 10.3365 10.0466 10.0666L11.38 8.7333L14.96 12.3133L13.0933 14.1666Z"
                        stroke="black"
                        stroke-miterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2301_253">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>(27) 3227-4053</p>
                </div>
              </div>

              <p className="font-semibold text-center text-base">Faça seu pedido pelo WhatsApp</p>
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-full max-w-[400px] mx-auto">
              <Image src="/dog-header.png" alt="" width={899} height={967} className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 bg-rose-50">
        <div className="w-full flex gap-x-20 justify-center max-w-7xl mx-auto">
          <div className="w-full items-center gap-x-4 flex">
            <div className="w-14 h-14 bg-rose-200 rounded-full flex items-center justify-center">
              <figure className="w-6 h-6 flex items-center justify-center">
                <DogIcon />
              </figure>
            </div>

            <article className="flex flex-col flex-1">
              <p className="font-medium">Pet Shop</p>
              <p className="text-xs text-slate-500">A maior variade de produtos para todos os tipos de pet.</p>
            </article>
          </div>

          <div className="w-full items-center gap-x-4 flex">
            <div className="w-14 h-14 bg-rose-200 rounded-full flex items-center justify-center">
              <figure className="w-6 h-6 flex items-center justify-center">
                <ShowerIcon />
              </figure>
            </div>

            <article className="flex flex-col flex-1">
              <p className="font-medium">Banho e Tosa</p>
              <p className="text-xs text-slate-500">Seu pet lindo e cheiroso.</p>
            </article>
          </div>

          <div className="w-full items-center gap-x-4 flex">
            <div className="w-14 h-14 bg-rose-200 rounded-full flex items-center justify-center">
              <figure className="w-6 h-6 flex items-center justify-center">
                <VetIIcon />
              </figure>
            </div>

            <article className="flex flex-col flex-1">
              <p className="font-medium">Consultório</p>
              <p className="text-xs text-slate-500">A saúde do seu pet em dia.</p>
            </article>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-slate-100" id="location">
        <div className="w-full flex gap-x-12 max-w-7xl items-center mx-auto">
          <div className="bg-white rounded-sm">
            <iframe
              width="700"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              className="drop-shadow-xl"
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Agroelho+pet+center&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;hl=pt-BR"
            ></iframe>
          </div>

          <div className="flex w-full flex-col gap-y-8">
            <div className="w-full items-center gap-x-4 flex">
              <figure className="w-6 h-6 flex items-center justify-center">
                <LocationIcon />
              </figure>

              <article className="flex flex-col flex-1">
                <p className="font-medium text-xl">Localização</p>
                <p className="text-base text-slate-500">Av. Maruípe, 1530 - Bonfim, Vitória - ES, 29047-110</p>
              </article>
            </div>

            <div className="w-full items-center gap-x-4 flex">
              <figure className="w-6 h-6 flex items-center justify-center">
                <ClockIcon />
              </figure>

              <article className="flex flex-col flex-1">
                <p className="font-medium text-xl">Funcionamento</p>
                <p className="text-base text-slate-500">Segunda a Sexta - 8h às 18h</p>
                <p className="text-base text-slate-500">Sábado - 8h às 12h</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
