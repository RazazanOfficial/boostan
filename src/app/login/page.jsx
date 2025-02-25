"use client";
import { TypewriterEffectSmooth } from "@/components/TextEffect";
import Link from "next/link";
import { useState } from "react";
import "@/styles/login.css";

const page = () => {
  const [isActive, setIsActive] = useState("departments");
  const tabs = [
    { id: "students", lable: "کارتابل دانشجویان" },
    { id: "parents", lable: "کارتابل والدین" },
    { id: "departments", lable: "کارتابل واحدها" },
    { id: "forgotPassword", lable: "فراموشی رمزعبور" },
  ];

  // const Header = () => {
  //   return (
  //     <header className="flex items-center justify-between p-4 mb-5">
  //       <nav>
  //         <ul className="flex">
  //           <li className="px-2">
  //             <Link href="#">صفحه نخست</Link>
  //           </li>
  //           <li className="px-2">
  //             <Link href="#">گالری تصاوویر</Link>
  //           </li>
  //           <li className="px-2">
  //             <Link href="#">اخبار اطلاعیه ها</Link>
  //           </li>
  //           <li className="px-2">
  //             <Link href="#">فرم های دانشجویی</Link>
  //           </li>
  //           <li className="px-2">
  //             <Link href="#">معاونت دانشجویی</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <TypewriterEffectSmooth />
  //     </header>
  //   );
  // };

  const StudentsForm = () => {
    return (
      <form
        action=""
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          ورود به سیستم
        </h2>
        <h3 className="text-sm text-center text-gray-500">
          در صورت عضو نبودن شما می توانید به امور دانشجویی مراجعه نمایید.
        </h3>
        <h2 className="text-xl font-semibold text-center text-gray-700">
          فرم کارتابل دانشجویان
        </h2>
        <label htmlFor="userName" className="block text-right text-gray-700">
          نام کاربری
        </label>
        <input
          type="text"
          placeholder="نام کاربری"
          id="userName"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="password" className="block text-right text-gray-700">
          رمز عبور
        </label>
        <input
          type="password"
          placeholder="رمز عبور"
          id="password"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          ورود به سیستم
        </button>
      </form>
    );
  };

  const ParentsForm = () => {
    const options = [
      { value: "option1", label: "گزینه 1" },
      { value: "option2", label: "گزینه 2" },
      { value: "option3", label: "گزینه 3" },
      { value: "option4", label: "گزینه 4" },
    ];

    return (
      <form
        action=""
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          ورود به سیستم
        </h2>
        <h3 className="text-sm text-center text-gray-500">
          در صورت عضو نبودن شما می توانید به امور دانشجویی مراجعه نمایید.
        </h3>
        <h2 className="text-xl font-semibold text-center text-gray-700">
          فرم کارتابل والدین
        </h2>
        <label htmlFor="userName" className="block text-right text-gray-700">
          نام کاربری
        </label>
        <input
          type="text"
          placeholder="نام کاربری"
          id="userName"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="password" className="block text-right text-gray-700">
          رمز عبور
        </label>
        <input
          type="password"
          placeholder="رمز عبور"
          id="password"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          ورود به سیستم
        </button>
      </form>
    );
  };

  const DepartmentsForm = () => {
    const departments = [
      { id: "one", label: "کارکنان" },
      { id: "two", label: "واحد متقاضی" },
      { id: "three", label: "واحد تسیسات" },
      { id: "four", label: "دانشکده ها" },
    ];

    return (
      <form
        action=""
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          ورود به سیستم
        </h2>
        <h3 className="text-sm text-center text-gray-500">
          در صورت عضو نبودن شما می توانید به امور دانشجویی مراجعه نمایید.
        </h3>
        <h2 className="text-xl font-semibold text-center text-gray-700">
          فرم کارتابل واحدها
        </h2>
        <div className="flex space-x-4">
          {departments.map((dept) => (
            <div key={dept.id} className="flex items-center space-x-1">
              <input
                type="radio"
                name="group1"
                id={dept.id}
                className="form-radio text-green-500"
              />
              <label
                htmlFor={dept.id}
                className="text-gray-700 text-xs px-1 font-bold"
              >
                {dept.label}
              </label>
            </div>
          ))}
        </div>
        <label htmlFor="userName" className="block text-right text-gray-700">
          نام کاربری
        </label>
        <input
          type="text"
          placeholder="نام کاربری"
          id="userName"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="password" className="block text-right text-gray-700">
          رمز عبور
        </label>
        <input
          type="password"
          placeholder="رمز عبور"
          id="password"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          ورود به سیستم
        </button>
      </form>
    );
  };

  return (
    <div className="container mx-auto">
      <header className="w-full h-full my-5">
        <TypewriterEffectSmooth />
      </header>
      <main className="flex items-start justify-center w-full py-8 px-6 mt-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-xl">
  {/* نوار تب‌ها */}
  <div className="w-1/5 px-4 py-5 bg-white shadow-md rounded-xl h-auto">
    <ul className="space-y-2">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          onClick={() => setIsActive(tab.id)}
          className={`cursor-pointer px-4 py-3 rounded-lg text-gray-700 transition duration-300 ${
            isActive === tab.id
              ? "bg-green-200 text-green-800 font-bold shadow-md"
              : "hover:bg-green-100 hover:text-green-700"
          }`}
        >
          {tab.lable}
        </li>
      ))}
    </ul>
  </div>

  {/* محتوای فرم‌ها */}
  <div className="w-4/5 h-auto mx-6 p-6 rounded-xl bg-slate-100 shadow-md">
    {isActive === "students" && <StudentsForm />}
    {isActive === "parents" && <ParentsForm />}
    {isActive === "departments" && <DepartmentsForm />}
  </div>
</main>
    </div>
  );
};

export default page;
