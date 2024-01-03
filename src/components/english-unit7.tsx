"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const LangFocus = [
    {
        title: "Pronunciation - Intonation in Wh- and Yes/No questions",
        desc: "<p><i>Rules to Remember:</i> In wh- questions that ask for new information, the voice usually falls at the end of the question (falling intonation)</p> <br/> <img src='./unit7/Picture1.png' /> <br> <p>Example: In yes/no questions, the voice usually rises at the end of the question (rising)</p> <br> <img src='./unit7/Picture2.png' />",
    },
    {
        title:
            "Vocabulary - Words and phrases related to education after leaving school.",
        desc: "<p>* school-leaver (n) a person who has just left school</p> <p>* vocational education (np) education that prepare students for work in a specific trade</p> <p>* higher education (n) education at a college or university</p> <p>* qualification (n) an official record showing that you have finished a training course or have the necessary skills</p> <p>* graduation (n) the act of completing a university degree or a course of study</p>",
    },
    {
        title: "Grammar - Perfect gerunds and perfect participle clauses",
        desc: "<p><b>Perfect gerunds</b></p> <p>Perfect gerund refers to an action that takes place before another action. It can be used as the subject of a sentence, the complement of the conjunctive verb “be”, the object of a preposition, and the object of a verb.</p> <p>Example:</p> <p>* Having built a new house costs a large amount of money.</p> <p>* She denied having broken the flower vase.</p> <p><b>Perfect participle</b></p> <p>Perfect participle phrase refers to an action that occurred before the action in the main clause. It identifies the subject of the main clause and acts as the reason why the main clause took place. The noun or the pronoun (subject) the perfect participle phrase identifies is either the subject of the perfect participle phrase or the object of its main verb.</p> <p><b>Example:</b></p> <p>Having heard the news of his accident, we decided to take the day off and see him.</p> <p>Not having been respected for his work, Jolie left the company and started his own business.</p>",
    },
    {
        title: "Practice: Supply the correct form of the verbs in brackets.",
        desc: "<p>1. They left the restaurant, _______________ (spend) two hours over lunch.</p> <p>2. (See) _______________ photograph of the place, I had no desire to go there.</p> <p>3. (Switch) ______________ of the light, we went to bed.</p> <p>4. The boy was accused of (steal) ____________ her money.</p> <p>5. She apologized for (break) ____________ my vase.</p>",
    },
];

const Skills = [
    {
        title: "Reading - Reading for main ideas and specific information about an article about different study option after leaving school",
        desc: "<p><b>THE EDUCATIONAL JOURNEY FOR SCHOOL-LEAVERS</b></p> <p>This month, Teen Talk magazine has received many letters from secondary school students asking about the different options for school-leavers. We've talked to educational experts, and they think that young people should either continue their studies at a college or university or go to a vocational school.</p> <p>A. ______________________</p> <p>Higher education is really for people who want <b>formal</b> learning in order to get an academic degree. If you are good at certain subjects and need a degree related to those subjects, then university is the right choice for you. Besides studying, university students also have the opportunity to live independently, make new friends, and join different clubs. Many students still <b>manage</b> to work part-time during their university years. In addition, college or university students usually have an advantage over students from vocational schools when it comes to further studies after a degree. They will also have broader career options and an advantage in the job market.</p> <p>B. ______________________</p> <p>If you are not interested in traditional academic subjects and want to work in a specific <b>trade</b>, then vocational education is the right choice for you. You will gain the practical skills and knowledge necessary for a specific job. In addition, a vocational school may also offer you an <b>apprenticeship</b>. This type of training not only provides students with hands-on experience, but also gives them wages to cover their living costs. Most importantly, vocational training is usually much shorter than a college or university course. After getting their vocational qualifications, graduates can immediately start work and earn a salary.</p> <p>There are a lot of educational opportunities for school-leavers today. You can choose from hundreds of vocational schools or higher education <b>institutions</b> to continue your educational journey.</p>"
    },
    {
        title: "Practice: Match the highlighted words in the article above with their meaning",
        desc: "<div class='grid grid-cols-2 gap-4'><div class='grid grid-cols-1 gap-4'><p>1. formal</p> <p>2. manage</p> <p>3. trade</p> <p>4. apprenticeship</p> <p>5. institutions</p></div> <div class='grid grid-cols-1 gap-4'><p>a. a job that requires special training and skills</p> <p>b. a period of time working for and leaning from a skilled person</p> <p>c. to succeed in doing something difficult</p> <p>d. important organisations that have a particular purpose</p> <p>e. Received in a school, college, or university, with lessons, exams, etc.</p></div></div>"
    },
    {
        title: "Speaking: Discussing the benefits of vocational training and academic study",
        desc: "<p><i>Complete the table below. Use the suggested ideas and/or your own ideas.</i></p> <img src='./unit7/Picture3.png' /> <p><b>Ending a conversation or discussion</b></p> <img src='./unit7/Picture4.png' /> <p><b>Listening - Listening for main ideas and specific information in a conversation about courses provided at a vocational school</b></p> <p><i>Listen to a conversation between Mai and the receptionist at ABC Vocational School. What are they talking about?</i></p> <p>A. Vocational schools in the area.</p> <p>B. Cooking courses at the vocational school.</p> <p>C. Qualifications needed to study at ABC Vocational School. Mai: Good morning.</p>"
    },
    {
        title: "Writing - Writing a request letter to ask for information about vocational school courses",
        desc: "<p><i>Look at the picture and discuss the following questions.</i></p> <img src='./unit7/Picture5.png' /> <p>1. Could you please tell me _______________?</p> <p>2. I would like to know _______________.</p> <p>3. I would appreciate it if you could tell me ____________.</p> <p><i>Practice: Write a letter (140-170 words) to request information about the courses in the first activity. Use the information, your ideas, and the outline with the tips below to help you.</i></p> <img src='./unit7/Picture6.png' />"
    }
];
const EngLishUnit7 = () => {
    const [open, setOpen] = React.useState(0);
    const [openSkills, setOpenSkills] = React.useState(0)
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    const handleOpenSkills = (value: number) => setOpenSkills(openSkills === value ? 0 : value);

    return (
        <section className="px-8">
            <section className="flex items-center w-full h-80 bg-cover bg-center py-32 zoom-on-scroll" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
                <div className="container mx-auto text-center text-white">
                    <h1 className="text-5xl font-medium mb-6">Unit 7</h1>
                </div>
            </section>
            <div className="container mx-auto py-20">
                <div className="text-center">
                    <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined}>
                        Language Focus
                    </Typography>

                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    {LangFocus.map(({ title, desc }, key) => (
                        <Accordion
                            placeholder={undefined}
                            key={key}
                            open={open === key + 1}
                            onClick={() => handleOpen(key + 1)}
                        >
                            <AccordionHeader className="text-left text-gray-900" placeholder={undefined}>
                                {title}
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography
                                    placeholder={undefined}
                                    color="blue-gray"
                                    className="font-normal text-black-900"
                                >
                                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                                </Typography>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>

            <div className="container mx-auto py-20">
                <div className="text-center">
                    <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined}>
                        Skills
                    </Typography>

                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    {Skills.map(({ title, desc }, key) => (
                        <Accordion
                            placeholder={undefined}
                            key={key}
                            open={openSkills === key + 1}
                            onClick={() => handleOpenSkills(key + 1)}
                        >
                            <AccordionHeader placeholder={undefined} className="text-left text-gray-900">
                                {title}
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography
                                    placeholder={undefined}
                                    color="blue-gray"
                                    className="font-normal text-black-900"
                                >
                                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                                </Typography>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EngLishUnit7