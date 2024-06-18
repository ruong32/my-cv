import { Card, Image } from "@/component";

export const Experience = () => {
  return (
    <div className="py-6 flex flex-col md:py-12 md:flex-row lg:py-20">
      <div className="flex-1">
        <h1 className="text-3xl">Education</h1>
        <div className="mt-8 flex flex-col justify-center items-center [&>*+*]:mt-4">
          <Card
            dir="horizontal"
            icon={
              <Image
                className="h-24 w-24"
                src="/asset/image/my-university.png"
                alt="UET-VNU"
              />
            }
            title="University of Engineering and Technology - VNU"
            subTitle="2017 - 2021"
            description="The degree of Bachelor in Information Technology"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <h1 className="text-3xl">Experience</h1>
        <div className="mt-8 flex flex-col justify-center items-center [&>*+*]:mt-4">
          <Card
            dir="horizontal"
            icon={
              <Image
                className="h-24 w-24"
                src="/asset/image/coc-coc-logo.png"
                alt="UET-VNU"
              />
            }
            title="Cốc Cốc"
            subTitle="2022 - present"
            description={
              <ul>
                <li>
                  Maintaining Savior extention which allows users to download
                  videos on CocCoc browser. Mainly using Javascript.
                </li>
                <li>
                  Maintaining Newtab - a startup page which is shown when users
                  open a newtab on Coc Coc browser. Mainly using HTML, CSS and
                  Javascript.
                </li>
                <li>Developing Quizz web site using React and NextJS.</li>
                <li>Maintaining Referral page using React and NextJS.</li>
              </ul>
            }
            className="w-full"
          />
          <Card
            dir="horizontal"
            icon={
              <Image
                className="h-24 w-24 rounded-full"
                src="/asset/image/alo-logo.jpeg"
                alt="UET-VNU"
              />
            }
            title="Alo"
            subTitle="2021 - 2022"
            description={
              <ul>
                <li>
                  Developing REST APIs for Alo app and Alo web admin to manage
                  data usingVert.x with MySQL database.
                </li>
                <li>Developing UI for admin web using React.</li>
                <li>Developing UI for client web using Next.js and React.</li>
                <li>
                  Developing an MVC web for Customer Service using MySQL for
                  database, SpringBoot for backend and Thymeleaf for frontend.
                </li>
                <li>
                  Deploying frontend, backend to server and setting up
                  environment for testing.
                </li>
              </ul>
            }
            className="w-full"
          />
          <Card
            dir="horizontal"
            icon={
              <Image
                className="h-24 w-24 rounded-full"
                src="/asset/image/vts-logo.jpeg"
                alt="UET-VNU"
              />
            }
            title="Viettel Business Solutions"
            subTitle="2020 - 2021"
            description={
              <ul>
                <li>
                  Developing backend for web application using Spring Boot
                  framework and frontend using Angular.
                </li>
                <li>Using Docker to deploy applications.</li>
              </ul>
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
