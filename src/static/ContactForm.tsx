import React from "react";

function ContactForm() {
  return (
    <section className="fixed top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="py-8 px-4 mx-auto ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#F8F7F6]  dark:text-white">
          Contact Us
        </h2>
        <form
          action="https://formsubmit.co/ratih.julistina95@gmail.com"
          className="space-y-8"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#F8F7F6]  dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="youremail@email.com"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-[#F8F7F6]  dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#F8F7F6]  dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-poppins font-medium text-center text-[rgb(41,41,51)] rounded-lg bg-[#ffc96b] sm:w-fit hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-black dark:bg-[#ffc96b] dark:hover:bg-indigo-500 dark:focus:ring-black"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
