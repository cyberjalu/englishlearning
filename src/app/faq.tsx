"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
  {
    title: "I'm overwhelmed by all the platforms! How do I choose the right one?",
    desc: "Focus on your goals! Want conversational skills? Try interactive apps like Duolingo or Memrise. Aiming for academic English? Explore MOOCs from Coursera or edX. Set a budget, compare features (free vs. paid, teacher qualifications, course duration), and try free trials before committing.",
  },
  {
    title:
      "I struggle with speaking – any tips for online practice?",
    desc: "Join language exchange platforms, find online speaking groups, or pair up with a friend. Record yourself speaking and analyze your pronunciation. Utilize tools like shadowing (repeating after native speakers) to improve fluency and accent. Don't fear mistakes – embrace them as stepping stones!",
  },
  {
    title: "Motivation dwindles… how do I stay consistent?",
    desc: "Set achievable goals and celebrate milestones. Find a learning buddy – accountability boosts motivation. Make it fun! Integrate music, movies, or games you enjoy into your routine. Don't hesitate to ask for help – utilize online tutoring, forums, or teacher support whenever needed.",
  },
  {
    title: "Is there a budget-friendly way to learn online?",
    desc: "Absolutely! Explore a plethora of free resources like BBC Learning English, VOA Learning English, or YouTube channels like Rachel's English. Utilize free trials of paid platforms before committing. Join online communities to benefit from shared resources and tips.",
  },
  {
    title: "I just feel stuck... what can I do?",
    desc: "Remember, progress takes time! Diversify your learning methods to avoid monotony. Immerse yourself in English outside of your studies (music, podcasts, conversations). Don't be afraid to switch platforms or try new approaches. Above all, be patient and kind to yourself – the beauty of language learning unfolds with consistent effort!",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography placeholder={undefined} variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
          placeholder={undefined}
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            The Back-to-School Campaign is a special promotion designed to make
            your return to school as smooth as possible.
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
            placeholder={undefined}
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader placeholder={undefined} className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                placeholder={undefined}
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
