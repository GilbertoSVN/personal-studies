import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import project1 from "../../public/images/projects/portfolio-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="
      w-full
      flex
      items-center
      justify-between
      rounded-3xl
      border
      border-solid
      border-dark
      bg-light
      shadow-2xl
      p-6
      relative
      rounded-br-2xl
      dark:bg-dark
      dark:border-light
      dark:text-light
      lg:flex-col
      lg:p-8
      xs:rounded-2xl
      xs:rounded-br-3xl
      xs:p-4
    "
    >
      <div
        className="
          absolute
          top-0
          -right-3
          -z-10
          w-[101%]
          h-[103%]
          rounded-[2.5rem]
          bg-dark
          rounded-br-3xl
        dark:bg-light
          sm:-right-2
          sm:h-[102%]
          xs:w-full
          xs:rounded-[1.5rem]
        "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw
          "
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="
              ml-4
              rounded-lg
              bg-dark
              text-light
              py-2
              px-6
              text-lg
              font-semibold
              hover:bg-dark/75
              transition
              duration-300
              dark:bg-light
              dark:text-dark
              hover:dark:bg-light/75
              sm:px-4
              sm:text-base
            "
          >
            Visit the Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-solid
        border-dark
        bg-light
        p-6
        relative
        dark:border-light
        dark:bg-dark
        xs:p-4
      "
    >
      <div
        className="
          absolute
          top-0
          -right-3
          -z-10
          w-[101%]
          h-[103%]
          rounded-[2rem]
          bg-dark
          dark:bg-light
          rounded-br-3xl
          md:-right-2
          md:w-[101%]
          sm:h-[102%]
          xs:rounded-[1.5rem]
        "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw
          "
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="
              text-lg
              font-semibold
              underline
              dark:text-light
              md:text-base
            "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 dark:text-light md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>GSVN | Projects Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center mb-16">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination + Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="React Portfolio Website"
                img={project1}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                img={project1}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                img={project1}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
