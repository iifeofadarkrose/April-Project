import { useTranslation } from "react-i18next";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import { IoMail } from "react-icons/io5";
export default function ContactUs() {
  const { t } = useTranslation();

  return ( 
    <div id="contact" className="md:mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="uppercase text-[#9E8372] text-3xl mt-10 md:text-6xl">
          {t("contact_us")}
        </h1>
      </div>
      <form
        action="https://getform.io/f/c8027841-9a14-4928-9762-595b8c68913b" 
        method="POST"
        encType="multipart/form-data"
        className="mx-auto mt-4 max-w-xl lg:max-w-4xl shadow-lg ring-2 ring-inset ring-gray-300 focus:ring-2 p-10 mb-[2%]"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-[#5F5F5F]"
            ></label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={t("first_name_placeholder")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9E8372] sm:text-sm sm:leading-6"
                required // Добавлен атрибут required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-[#5F5F5F]"
            ></label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder={t("last_name_placeholder")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9E8372] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-[#5F5F5F]"
            ></label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder={t("email_placeholder")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9E8372] sm:text-sm sm:leading-6"
                required // Добавлен атрибут required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-[#5F5F5F]"
            ></label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                placeholder={t("phone_number_placeholder")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9E8372] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-[#5F5F5F]"
            ></label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder={t("message_placeholder")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#9E8372] sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#5F5F5F] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#9E8372] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E8372]"
          >
            {t("submit_button_text")}
          </button>
        </div>
        <div className="mt-10 flex items-center justify-between">
  <a href="mailto:aprilconcepte@email.fr" target="_blank" rel="noopener noreferrer" className="flex items-center">
    <IoMail className="cursor-pointer border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[32px] md:h-[32px] fill-[#9E8372] lg:w-[44px] lg:h-[44px]" />
    <div className="flex flex-col ml-2 text-[#5F5F5F]">
    <span className="ml-2 text-[#5F5F5F]">aprilconcepte@email.fr</span>
    <span className="ml-2 text-[#5F5F5F]"n>Paris 75003</span>
    <span className="ml-2 text-[#5F5F5F]"n>Deauville 14800</span>
    </div>
  </a>
  <div className="flex items-center ml-8">
    <BsFillTelephoneInboundFill className="cursor-pointer border mb-1 p-1 border-white rounded-md w-[44px] h-[44px] md:w-[32px] md:h-[32px] fill-[#9E8372] lg:w-[44px] lg:h-[44px]" />
    <div className="flex flex-col ml-2 text-[#5F5F5F]">
      <a href="tel:+33784236409" target="_blank" rel="noopener noreferrer">(+33) 07. 84. 23. 64. 09.</a>
      <a href="tel:+33786595508" target="_blank" rel="noopener noreferrer" className="ml-11"> 07. 86. 59. 55. 08.</a>
    </div>
  </div>
</div>




      </form>
    </div>
  );
}
