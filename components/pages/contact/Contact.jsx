import Image from "next/image.js";
import React from "react";

const Contact = () => {
  return (
    <section className="py-pp_80 mt-[97px] dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          <div className="w-full ">
            <div>
              <h1 className="text-primary font-semibold text-[24px]">
                تواصل معنا
              </h1>
              <p className="text-[13px] leading-7 text-grayColor dark:text-white">
                سجل حافل في إنتاج وتوزيع الأفلام الحائزة على جوائز دولية
                والمسلسلات التلفزيونية عالية التصنيف نمتلك ونوزع كامل حقوق
                مسلسلاتنا وانتاجاتنا عالمياً
              </p>
            </div>
            <div className="mt-6">
              <form>
                <div className=" py-6 flex flex-col justify-center sm:py-12">
                  <div className="relative py-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00CC9A] to-[#009BFB] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                      <div className="max-w-md mx-auto">
                        <div>
                          <h1 className="text-2xl font-semibold"></h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                              <input
                                autoComplete="off"
                                id="name"
                                name="name"
                                type="text"
                                className="peer text-[14px] placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder=" الاسم"
                              />
                              <label
                                htmlFor="name"
                                className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                              >
                                 الاسم
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                autoComplete="off"
                                id="phone"
                                name="phone"
                                type="phone"
                                className="peer text-[14px] placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder=" الهاتف"
                              />
                              <label
                                htmlFor="phone"
                                className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                              >
                                 الهاتف
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                autoComplete="off"
                                id="email"
                                name="email"
                                type="text"
                                className="peer text-[14px] placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder=" البريد الإلكتروني"
                              />
                              <label
                                htmlFor="email"
                                className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                              >
                                 البريد الإلكتروني
                              </label>
                            </div>
                            <div className="relative">
                              <textarea
                                autoComplete="off"
                                id="textArea"
                                name="textArea"
                                type="text"
                                className="peer text-[14px] placeholder-transparent h-[100px] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder=" رسالتك"
                              />
                              <label
                                htmlFor="textArea"
                                className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                              >
                                 رسالتك
                              </label>
                            </div>
                            <div className="relative">
                              <button className="bg-primary text-white w-full rounded-md px-2 py-1">
                                ارسال
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-ful relative">
          
              <Image
                src="/images/306~cinema 1.svg"
                alt="picture 1"
                fill
                objectFit="cover"
              />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
