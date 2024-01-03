"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const BOOKS = [
  {
    img: `/image/books/RectangleBig1.svg`,
    category: "Unit 7",
    title: "EDUCATION OPTIONS FOR SCHOOL-LEAVERS",
    href: "/unit7",
    // desc: "A heartwarming and humorous picture book that eases the jitters of starting kindergarten.",
    // price: "$99",
    // offPrice: "$79",
  },
  {
    img: `/image/books/RectangleBig6.svg`,
    category: "Unit 8",
    title: "BECOMING INDEPENDENT",
    href: "/unit8",
    // desc: "A funny and relatable novel about the challenges of navigating middle school.",
    // price: "$99",
    // offPrice: "$79",
  },
];

const BOOKS_TABS = [
  "history",
  "law",
  "math",
  "economy",
  "business",
  "communication",
];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("history");

  return (
    <section className="px-8 pt-20 pb-10" id="english-lesson">
      <div className="container mx-auto mb-20 text-center">
        <Typography
        placeholder={undefined}
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
          Always Free
        </Typography>
        <Typography placeholder={undefined} variant="h1" color="blue-gray" className="mb-2">
          English Lesson
        </Typography>
        <Typography
        placeholder={undefined}
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          We offer a wide range of study guides, test prep materials. 
        </Typography>
        {/* <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <BookCard  key={key} {...props} />
        ))}
      </div>
      {/* <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div> */}
    </section>
  );
}


export default BackToSchoolBooks;