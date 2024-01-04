"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const LangFocus = [
    {
        title: "Pronunciation - Intonation in invitations, suggestions, and polite requests",
        desc: "",
    },
    {
        title: "Vocabulary - Words and phrases related to independence",
        desc: "<p>* self-motivated (adj) - able to do or achieve something without pressure from others</p> <p>* self-study (n) - the activity of learning something by yourself without teachers’ help</p> <p>* manage (v) - to succeed in dealing with something, especially something difficult</p> <p>* trust (n) - a belief that someone is good, honest and reliable, and will not harm you</p> <p>life skill (n) - a skill that is necessary or extremely useful to manage well in daily life</p>",
    },
    {
        title: "Grammar",
        desc: "<p><b>Cleft sentences with It is/was… that/who</b></p> <p>A cleft sentence is used to focus on a particular part of the sentence and to emphasize what we want to say. We use it to introduce the thing that we want to focus on while the rest is put in a relative clause introduced with a relative pronoun e.g. that or who</p> <br> <p><b><i>The clause which follows the it-clause is connected using that and it contains information that is already understood. We often omit that in informal situations when it is the object of the verb:</i></b></p> <p>A: Sharon’s car got broken into yesterday, did it?</p><p>B: No. It was Nina’s car that got broken into!</p> <br> <p>A: You’ve met my mother, haven’t you?</p><p>B: No, it was your sister (that) I met!</p> <br> <p><b>When a personal subject is the focus, we can use who instead of that. We often omit who in informal situations when it is the object of the verb:</b></p><p>It was my husband who (or that) you spoke to on the phone. (or It was my husband you spoke to on the phone.)</p> <br> <p><b>When a plural subject is the focus, we use a plural verb but It + be remains singular:</b></p><p>It’s the parents who were protesting most.</p> <br> <p><b>We can use negative structures in the it-clause:</b></p> <p>It wasn’t the Greek student who phoned.</p>",
    },
    {
        title: "Practice: Rewrite the sentences using cleft sentences focusing on the underlined parts.",
        desc: "<p>1. John is saving his pocket money to buy a new phone.</p> <p>-> It _______________________________ to buy a new phone.</p> <p>2. He gets 20 dollars every week by doing chores around the house.</p> <p>-> It ____________________________ by doing chores around the house.</p> <p>3. John earned more pocket money by helping his grandpa last weekend.</p> <p>-> It ________________________ more pocket money by helping his grandpa.</p> <p>4. He bought gifts for his friends and family members with his pocket money.</p> <p>-> It __________________________ he bought with his pocket money.</p> <p>5. Teenagers can earn pocket money by doing part-time jobs.</p> <p>-> It _____________________ can earn pocket money.</p>",
    },
];

const Skills = [
    {
        title: "Reading - Reading for main ideas and specific information about an article about how teens can become independent",
        desc: "<p>Becoming independent is important for teenagers. Below are the necessary skills you should learn to achieve independence for the future.</p> <br> <p>A. First, make sure you can safely get around by yourself using public transport, walking, or cycling. Second, learn to communicate well and develop good relationships with people. Do some part-time jobs and get to know how to manage your money. You should also learn to cook healthy meals for your family. Finally, help your parents with household chores like cleaning and doing laundry.</p> <br> <p>B. To begin with, identify the problem and come up with as many solutions as possible. Write down the options, so you can review the advantages and disadvantages of each one. This will help you see which option could be the best for you. Don’t base your decision on emotion only. Once you have made your choice, create a plan of specific steps to move forward. Then carry out your plan, and think about whether you have achieved the result you wanted.</p> <br> <p>C. First of all, get into the habit of making a to-do-list every day or week. Make use of time-management tools, such as apps or diaries, to know what you need to do next. In addition, decide how much time you need for each task and always do one thing at a time to make sure you complete it. Schedule time to relax as well, and make sure you sleep at least nine hours each night. A good night's sleep is necessary for teenage brain development and good health. Becoming independent is not easy, but it is not as challenging as you may think. It’s about learning useful skills, making decisions by yourself, and knowing how to spend your time.</p>"
    },
    {
        title: "Practice: Read the text above. Match the paragraphs (A-C) with the headings (1-5). There are TWO extra headings. ",
        desc: "<p>1. Manage your money</p> <p>2. Relax and sleep well</p> <p>3. Develop time-management skills</p> <p>4. Improve your decision-making skill</p> <p>5. Learn basic, but important life skills</p>"
    },
    {
        title: "Speaking",
        desc: "<p><b>Giving detailed instructions on learning basic life skills</b></p> <br> <img src='./unit8/Picture1.png' /> <br> <p><b>Using sequencing words and phrase when giving instructions</b></p> <br> <img src='./unit8/Picture2.png' />"
    },
    {
        title: "Listening - Listening for main ideas and specific information in a conversation about becoming independent learners",
        desc: "<p><b>Listen to a conversation between Mai and Mike, and choose the correct answers A, B, or C.</b></p> <p>1. What is the conversation mainly about?</p> <p>A. What motivates independent learners.</p> <p>B. Independent learners’ sense of responsibility.</p> <p>C. What makes a successful independent learner.</p> <p>2. What makes independent learners study hard?</p> <p>A. Their motivation for learning.</p> <p>B. Their learning goals.</p> <p>C. The responsibility for their own learning.</p> <p>3. What do independent learners do if the task they are working on is too difficult?</p> <p>A. They give up and move on to something harder.</p> <p>B. They make every effort to finish it.</p> <p>C. They ask questions about it.</p> "
    },
    {
        title: "Writing - Writing an article about the pros and cons of self-study",
        desc: "<p><b>Read the following ideas and decide if they are pros or cons of self-study. Think of other pros and cons to add.</b></p> <p>1. Self-study gives learners more freedom (e.g. they decide what to study and how).</p> <p>2. Learners need more time to learn things (e.g. they work on their own, with no one to push them or help them).</p> <p>3. Learners become responsible (e.g. they set their learning goals and make plans to achieve them).</p> <p>4. Learners may not develop certain life skills (e.g. good communication and relationship skills)</p> <p>5. Self-study makes learners confident ( e.g. they realise they can complete tasks by themselves)</p> <p>6. Learners may not learn practical skills (e.g. they may focus too much on learning, and may not apply the academic skills to real life)</p> <br> <p><i>Practice: Write an article (150-180 words) about the pros and cons of self-study. Use the ideas in the first activity and the outline with useful expressions below to help you.</i></p> <br> <img src='./unit8/Picture3.png' />"
    }
];
const EngLishUnit8 = () => {
    const [open, setOpen] = React.useState(0);
    const [openSkills, setOpenSkills] = React.useState(0)
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    const handleOpenSkills = (value: number) => setOpenSkills(openSkills === value ? 0 : value);

    return (
        <section className="px-8">
            <section className="flex items-center w-full h-80 bg-cover bg-center py-32 zoom-on-scroll" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
                <div className="container mx-auto text-center text-white">
                    <h1 className="text-5xl font-medium mb-6">Unit 8</h1>
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

export default EngLishUnit8