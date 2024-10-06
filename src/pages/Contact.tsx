const Contact = () => {
  return (
    <section className="contact_us py-12 pt-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="hidden md:block lg:w-1/2 md:w-1/2 left-section p-6 bg-[url('assets/contact.jpg')] bg-cover bg-center bg-no-repeat relative">
            <div className="absolute w-full h-full bg-black/70 top-0 left-0 "></div>
            <div className="text-white relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl mb-4">نحن هنا لمساعدتك!</h1>
              <p>لا تتردد في التواصل معنا. نحن نسعى لتقديم أفضل خدمة ممكنة.</p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4 font-bold">تواصل معنا</h3>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="fname"
                >
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  required
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="fname"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="email"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="phone"
                >
                  رقم الهاتف
                </label>
                <input
                  type="text"
                  required
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="phone"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="message"
                >
                  رسالتك
                </label>
                <textarea
                  required
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="message"
                  rows={5}
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full bg-myGreen-dark hover:bg-myGreen-hover text-white py-2 rounded"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
