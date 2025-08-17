import React from "react";

function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-back px-6 py-12">
      {/* Title */}
      <h1 className="text-center text-5xl font-extrabold mb-8 text-gray-800">
        About Us
      </h1>

      {/* Card */}
      <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 px-8 py-10 rounded-2xl border border-gray-200 shadow-lg bg-white">
        <ul className="list-disc ml-6 text-justify text-gray-700 leading-relaxed space-y-6">
          <li>
            Welcome to{" "}
            <span className="font-bold text-gray-900">QuickCV</span>, your
            ultimate solution for building{" "}
            <span className="font-bold text-gray-900">
              professional, ATS-friendly resumes
            </span>{" "}
            with ease. We understand that crafting a perfect resume can be
            overwhelming, so we've designed a{" "}
            <span className="font-bold text-gray-900">
              smart, user-friendly platform
            </span>{" "}
            that simplifies the process.
          </li>

          <li>
            With <span className="font-bold text-gray-900">QuickCV</span>, you
            can create a{" "}
            <span className="font-bold text-gray-900">standout resume</span> in
            minutes using{" "}
            <span className="font-bold text-gray-900">
              customizable templates
            </span>{" "}
            tailored to different industries. Our platform helps you{" "}
            <span className="font-bold text-gray-900">
              highlight your skills and experience
            </span>{" "}
            effectively, ensuring your resume meets{" "}
            <span className="font-bold text-gray-900">industry standards</span>{" "}
            and impresses recruiters.
          </li>

          <li>
            I'm a passionate{" "}
            <span className="font-bold text-gray-900">developer</span>{" "}
            dedicated to making the{" "}
            <span className="font-bold text-gray-900">
              resume-building process seamless and efficient
            </span>
            . Whether you're a{" "}
            <span className="font-bold text-gray-900">fresh graduate</span> or
            an{" "}
            <span className="font-bold text-gray-900">
              experienced professional
            </span>
            , <span className="font-bold text-gray-900">QuickCV</span> empowers
            you to{" "}
            <span className="font-bold text-gray-900">
              present your best self
            </span>{" "}
            and land your{" "}
            <span className="font-bold text-gray-900">dream job</span>.
          </li>

          <li className="font-bold text-gray-900 text-lg">
            Start building your perfect resume today with QuickCV 🚀
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
