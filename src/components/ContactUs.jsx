export default function ContactUs() {
  return (
    <div id="#contact">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="uppercase text-3xl mt-10">
          Contact <span className="uppercase text-[#9E8372]">Us</span>
        </h1>
      </div>
      <form
        action="https://getform.io/f/b5c3b966-294b-4999-b976-a711d8446b43"
        method="POST"
        encType="multipart/form-data"
        className="mx-auto mt-4 max-w-xl sm:mt-10 bg-[#D9D9D9] p-10"
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
                placeholder="Enter your first name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Enter your last name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Enter your email address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Enter your phone number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Enter your message"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#5F5F5F] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#5F5F5F] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>
  );
}
