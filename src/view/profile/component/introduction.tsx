import { Image, LinkButton } from "@/component";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapMarker,
  Messenger,
  Phone,
} from "@/component/icon";

export const Introduction = () => {
  return (
    <div className="flex flex-col py-6 gap-8 transition-[padding] duration-300 md:flex-row-reverse md:py-12 lg:py-20">
      <div className="mx-auto max-w-[340px] w-[80%]">
        <div className="relative max-w-full pb-[100%] rounded-full shadow-[0_0_16px_4px] shadow-orange-300">
          <Image
            priority
            className="absolute w-full h-full rounded-full border-[16px] border-[#00000033] dark:border-[#ffffff55]"
            src="/asset/image/my-photo.jpg"
            alt="my photo"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="mt-8 py-2 px-5 bg-orange-500 w-fit mx-auto rounded-t-full rounded-br-full md:mx-0 md:mt-0">
          Hello! I&apos;m
        </div>
        <h1 className="mt-4 text-3xl font-semibold text-center md:text-left md:text-4xl">
          Ruong Nguyen Trong
        </h1>
        <h2 className="mt-4 text-xl text-center md:text-left md:text-2xl">
          Software developer
        </h2>
        <div className="flex items-center justify-center mt-10 text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base">
          <Mail height={24} width={24} />
          <span className="ml-2">trongruong99@gmail.com</span>
        </div>
        <div className="flex items-center justify-center mt-4 text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base">
          <Phone height={24} width={24} />
          <span className="ml-2">+84 97 207 45 37</span>
        </div>
        <div className="flex items-center justify-center mt-4 text-sm text-gray-600 dark:text-gray-300 md:justify-start md:text-base">
          <MapMarker height={24} width={24} />
          <span className="ml-2">Ha Noi, Vietnam</span>
        </div>
        <div className="flex justify-center gap-8 mt-10 md:justify-start">
          <LinkButton href="https://www.facebook.com/ruong32">
            <Facebook />
          </LinkButton>
          <LinkButton href="https://m.me/ruong32">
            <Messenger />
          </LinkButton>
          <LinkButton href="https://github.com/ruong32">
            <Github />
          </LinkButton>
          <LinkButton href="https://www.linkedin.com/in/ruong32">
            <Linkedin />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
