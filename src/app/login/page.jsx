"use client";
import { TypewriterEffectSmooth } from "@/components/TextEffect";
import eitaIcon from '@/assets/icons/eitaa.svg';
import soroushIcon from '@/assets/icons/Soroush-color.png';
import { useState } from "react";
// import {Link} from 
import "@/styles/login.css";
import {
  GraduationCap,
  Users,
  Building,
  Key,
  DownloadIcon,
  MegaphoneIcon,
  Link2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [isActive, setIsActive] = useState("students");

  const Header = () => {
    return (
      <header className="flex items-center justify-between p-4 mb-5">
        <nav>
          <ul className="flex">
            <li className="px-2">
              <a href="#">صفحه نخست</a>
            </li>
            <li className="px-2">
              <a href="#">گالری تصاوویر</a>
            </li>
            <li className="px-2">
              <a href="#">اخبار اطلاعیه ها</a>
            </li>
            <li className="px-2">
              <a href="#">فرم های دانشجویی</a>
            </li>
            <li className="px-2">
              <a href="#">معاونت دانشجویی</a>
            </li>
          </ul>
        </nav>
        <TypewriterEffectSmooth />
      </header>
    );
  };

  const tabs = [
    {
      id: "students",
      lable: "کارتابل دانشجویان",
      icon: <GraduationCap className="w-5 h-5 text-green-700" />,
    },
    {
      id: "parents",
      lable: "کارتابل والدین",
      icon: <Users className="w-5 h-5 text-green-700" />,
    },
    {
      id: "departments",
      lable: "کارتابل واحدها",
      icon: <Building className="w-5 h-5 text-green-700" />,
    },
    {
      id: "forgotPassword",
      lable: "فراموشی رمزعبور",
      icon: <Key className="w-5 h-5 text-green-700" />,
    },
  ];
  const announcements = [
    {
      id: 1,
      title: "تمدید مهلت انتخاب واحد",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      linkTitle: "دانلود فایل",
      links: ["https://university.example.com/registration"],
    },
    {
      id: 2,
      title: "برنامه امتحانات نیمسال دوم",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      linkTitle: ["دانلود فایل", "دانلود فایل"],
      links: [
        "https://university.example.com/exams",
        "https://university.example.com/schedule",
      ],
    },
    {
      id: 3,
      title: "برنامه امتحانات نیمسال سوم",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      linkTitle: ["دانلود فایل", "دانلود فایل"],
      links: [
        "https://university.example.com/exams",
        "https://university.example.com/schedule",
      ],
    },
    {
      id: 4,
      title: "برنامه امتحانات نیمسال چهارم",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      linkTitle: ["دانلود فایل", "دانلود فایل"],
      links: [
        "https://university.example.com/exams",
        "https://university.example.com/schedule",
      ],
    },
  ];
  const topLinks = [
    {
      id: 1,
      linkTitle: "سامانه پهلوان",
      href: "http://sport.shahroodut.ac.ir/",
    },
    {
      id: 2,
      linkTitle: "سامانه گلستان",
      href: "https://golestan.shahroodut.ac.ir/home/Default.htm",
    },
    {
      id: 3,
      linkTitle: "دانشگاه صنعتی شاهرود",
      href: "https://shahroodut.ac.ir/fa/",
    },
    {
      id: 4,
      linkTitle: "صندوق رفاه دانشجویان",
      href: "https://swf.ir/fa",
    },
    {
      id: 5,
      linkTitle: "وزارت علوم، تحقیقات و فناوری",
      href: "https://www.msrt.ir/fa",
    },
  ];
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

  const ForgotPasswordForm = () => {
    return (
      <form
        action=""
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          بازیابی رمز عبور
        </h2>
        <h3 className="text-sm text-center text-gray-500">
          جهت بازیابی کلمه عبور از طریق پیامک، شماره دانشجویی و کدملی خود را در
          کادرهای مربوطه وارد نمایید.
        </h3>
        <label htmlFor="num" className="block text-right text-gray-700">
          شماره دانشجویی :
        </label>
        <input
          type="text"
          id="num"
          placeholder="شماره دانشجویی"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="code" className="block text-right text-gray-700">
          کد ملی :
        </label>
        <input
          type="number"
          id="code"
          placeholder="کد ملی"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          مرحله بعد
        </button>
      </form>
    );
  };

  const OfficialChannels = () => {
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("لینک با موفقیت کپی شد!");
    };

    return (
      <div className="flex flex-col items-center container px-6 py-8 bg-white shadow-lg rounded-xl my-7 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-green-700">
          کانال‌های رسمی معاونت دانشجویی در فضای مجازی
        </h2>
        <span className="text-gray-500 text-sm font-bold">
          به اطلاع دانشجویان عزیز می‌رساند کانال‌های رسمی اطلاع‌رسانی حوزه
          معاونت دانشجویی در پیام‌رسان‌های ایتا و سروش به آدرس:
        </span>
        <div
          className="flex items-center justify-start cursor-pointer bg-orange-100 text-orange-700 p-2 rounded-lg hover:bg-orange-200 gap-2 w-72"
          onClick={() => copyToClipboard("eitaa.com/st_sut")}
        >
          <img src='https://s6.uupload.ir/files/eitaa_5u8t.png' alt="Eitaa Icon" className="w-5 h-5" />
          <p className="font-bold underline text-sm">eitaa.com/st_sut</p>
          <p className="font-bold text-sm">(برای کپی کلینک کنید.)</p>
        </div>
        <div
          className="flex items-center justify-center space-x-2 cursor-pointer bg-blue-100 text-blue-700 p-2 rounded-lg hover:bg-blue-200 gap-2 w-72"
          onClick={() => copyToClipboard("splus.ir/st_sut")}
        >
          <img src='https://s6.uupload.ir/files/soroush_sqf3.png' alt="Splus Icon" className="w-5 h-5" />
          <p className="font-bold underline text-sm">splus.ir/st_sut</p>
          <p className="font-bold text-sm">(برای کپی کلینک کنید.)</p>
        </div>
        <p className="text-gray-700 text-sm">
          لطفاً جهت اطلاع سریع از اخبار و اطلاعیه‌های این حوزه{" "}
          <span className="font-bold text-red-600">
            (شامل خوابگاه‌ها، تغذیه، کمیسیون موارد خاص، سالن‌های ورزشی، مشاوره و
            سلامت و کمیته انضباطی)
          </span>{" "}
          در این کانال‌ها عضو شوید.
        </p>
      </div>
    );
  };

  const Announcements = () => {
    // const activeAnnouncement = announcements.find(
    //   (a) =>
    //     a.id ===
    //     (isActive === "students" ? 1 : isActive === "parents" ? 2 : null)
    // );

    return (
      <div className="w-full px-4 py-5 bg-white shadow-md rounded-xl mb-7">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          آخرین اطلاعیه‌ها
        </h2>
        <ul>
          {announcements.map((announcement) => (
            <li
              key={announcement.id}
              onClick={() => {
                setIsActive(`announcement-${announcement.id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex gap-2 cursor-pointer text-red-900 hover:underline mb-2 px-4 py-3 rounded-lg duration-300 ${
                isActive === `announcement-${announcement.id}`
                      ? "bg-red-200 text-red-800 font-bold shadow-md"
                      : "hover:bg-red-100 hover:text-red-700 hover:font-bold"
              }`}
            >
              <span>
                <MegaphoneIcon />
              </span>
              {announcement.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const AnnouncementDetails = ({ title, content, links, linkTitle }) => (
    <div className="flex flex-col bg-white shadow-lg rounded-2xl p-8 space-y-6 space-x-2 w-full mx-auto">
      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">
        {title}
      </h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <hr className="border-t border-gray-300 my-4" />
      <h2 className="text-2xl font-bold text-red-700 mb-4">
        پیوند های اطلاعیه
      </h2>
      <ul className="flex gap-5 pl-5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between gap-2 bg-red-600 text-white p-2 rounded-lg hover:bg-red-800 transition no-underline"
            >
              {Array.isArray(linkTitle) ? linkTitle[index] : linkTitle}
              <span>
                <DownloadIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const TopLinks = () => {
    return (
      <div className="w-full px-4 py-5 bg-white shadow-md rounded-xl mb-7">
        <h2 className="text-xl font-bold text-sky-700 mb-4">مهمترین پیوندها</h2>
        <ul>
          {topLinks.map((link) => (
            <li
              key={link.id}
              className="flex gap-2 cursor-pointer text-blue-700 hover:underline mb-2 pr-4 py-3 rounded-lg duration-300"
            >
              <span>
                <Link2 />
              </span>
              <a href={link.href} target="_blank" className="w-full"> {link.linkTitle} </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header className="w-full h-full my-5">
        {/* <Header/> */}
        <TypewriterEffectSmooth key={isActive} />
      </header>
      <main className="flex flex-col md:flex-row items-start justify-center w-full py-8 pr-6 my-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-xl">
        <section className="w-1/3">
          <div className="w-full px-4 py-5 bg-white shadow-md rounded-xl mb-7">
            <ul className="space-y-2 ">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setIsActive(tab.id)}
                  className={`flex items-center cursor-pointer px-4 py-3 rounded-lg text-green-900 transition duration-300 ${
                    isActive === tab.id
                      ? "bg-green-200 text-green-800 font-bold shadow-md"
                      : "hover:bg-green-100 hover:text-green-700 hover:font-bold"
                  }`}
                >
                  <span className="ml-2">{tab.icon}</span>
                  {tab.lable}
                </li>
              ))}
            </ul>
          </div>
          <Announcements />
          <TopLinks />
        </section>
        <section className="container mx-6">
          <div className="container h-auto p-6 rounded-xl bg-slate-100 shadow-md">
            {announcements.map(
              (announcement) =>
                isActive === `announcement-${announcement.id}` && (
                  <AnnouncementDetails
                    key={announcement.id}
                    {...announcement}
                  />
                )
            )}
            {isActive === "students" && <StudentsForm />}
            {isActive === "parents" && <ParentsForm />}
            {isActive === "departments" && <DepartmentsForm />}
            {isActive === "forgotPassword" && <ForgotPasswordForm />}
          </div>
          <OfficialChannels />
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default page;
