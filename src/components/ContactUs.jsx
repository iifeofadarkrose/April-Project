import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="uppercase text-[#9E8372] text-3xl mt-10 md:text-5xl">
          {t("contact_us")}
        </h1>
      </div>
      <form
        action="https://getform.io/f/c8027841-9a14-4928-9762-595b8c68913b" method="POST"
        encType="multipart/form-data"
        className="mx-auto mt-4 max-w-xl lg:max-w-4xl sm:mt-10 bg-[#D9D9D9] p-10 mb-[2%]"
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
      </form>
    </div>
  );
}
