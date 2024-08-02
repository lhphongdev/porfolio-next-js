"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Cupidatat deserunt consectetur minim id. Aliquip dolor aliqua voluptate eiusmod non labore magna. Ipsum sunt non deserunt mollit. Ut ut id do irure enim incididunt officia dolor ut ullamco duis velit cillum. In officia aliquip commodo est consectetur.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Phone",
      fieldValue: "0398371050",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "skype.abcd",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: "luuhoaiphong147@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Vietnamese, English",
    },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Cupidatat deserunt consectetur minim id. Aliquip dolor aliqua voluptate eiusmod non labore magna. Ipsum sunt non deserunt mollit. Ut ut id do irure enim incididunt officia dolor ut ullamco duis velit cillum. In officia aliquip commodo est consectetur.",
  items: [
    {
      company: "Google",
      position: "Frontend Developer",
      duration: "2019 - Present",
    },
    {
      company: "Facebook",
      position: "UI/UX Designer",
      duration: "2017 - 2019",
    },
    {
      company: "Twitter",
      position: "Backend Developer",
      duration: "2015 - 2017",
    },
    {
      company: "Instagram",
      position: "Fullstack Developer",
      duration: "2013 - 2015",
    },
    {
      company: "LinkedIn",
      position: "Frontend Developer",
      duration: "2011 - 2013",
    },
    {
      company: "Amazon",
      position: "UI/UX Designer",
      duration: "2009 - 2011",
    },
    {
      company: "Microsoft",
      position: "Backend Developer",
      duration: "2007 - 2009",
    },
    {
      company: "Apple",
      position: "Fullstack Developer",
      duration: "2005 - 2007",
    },
    {
      company: "Samsung",
      position: "Frontend Developer",
      duration: "2003 - 2005",
    },
    {
      company: "Sony",
      position: "UI/UX Designer",
      duration: "2001 - 2003",
    },
  ],
};

const educations = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Cupidatat deserunt consectetur minim id. Aliquip dolor aliqua voluptate eiusmod non labore magna. Ipsum sunt non deserunt mollit. Ut ut id do irure enim incididunt officia dolor ut ullamco duis velit cillum. In officia aliquip commodo est consectetur.",
  items: [
    {
      institution: "Harvard University",
      degree: "Bachelor of Science",
      duration: "2000 - 2004",
    },
    {
      institution: "Stanford University",
      degree: "Master of Science",
      duration: "2004 - 2006",
    },
    {
      institution: "MIT",
      degree: "PhD",
      duration: "2006 - 2009",
    },
    {
      institution: "Caltech",
      degree: "Postdoc",
      duration: "2009 - 2011",
    },
    {
      institution: "UC Berkeley",
      degree: "Professor",
      duration: "2011 - Present",
    },
    {
      institution: "UCLA",
      degree: "Professor",
      duration: "2011 - Present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Cupidatat deserunt consectetur minim id. Aliquip dolor aliqua voluptate eiusmod non labore magna. Ipsum sunt non deserunt mollit. Ut ut id do irure enim incididunt officia dolor ut ullamco duis velit cillum. In officia aliquip commodo est consectetur.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educations.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
