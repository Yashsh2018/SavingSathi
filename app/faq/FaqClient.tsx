"use client";
import { useState } from "react";
import bg3 from "../../assets/home/bg-3.jpg";

// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is SavingSathi?",
    answer:
      "SavingSathi is a purpose-driven social platform that helps users connect with others who have similar needs, interests, or offers — so they can plan smarter, save money, and make decisions together.",
  },
  {
    question: "How is SavingSathi different from other social media or deal apps?",
    answer:
      "SavingSathi focuses on connecting users with similar interests to make smarter decisions collaboratively, unlike typical social media or deal apps.",
  },
  {
    question: "How do I use SavingSathi?",
    answer:
      "You can use SavingSathi by signing up, finding groups or offers relevant to your interests, and connecting with others to share and make better decisions.",
  },
  {
    question: "Is SavingSathi free to use?",
    answer:
      "Yes, SavingSathi is completely free for users. You can post, join deals, chat, and connect without any charges.",
  },
  {
    question: "Can I post anonymously?",
    answer:
      "Yes! SavingSathi allows you to choose between public and private (anonymous) posting, so your identity is always under your control.",
  },
  {
    question: "What kind of posts can I make?",
    answer:
      "You can post needs, plans, offers, or questions in categories like Travel, Fitness, Fashion, Education, Electronics, Room Sharing, Pet Care, Career, Deals, and more.",
  },
  {
    question: "I posted something, but no one responded — what should I do?",
    answer:
      "Sometimes it takes a little time to match with the right people. Try using accurate titles, selecting the right category, and adding your city/ location to increase reach.",
  },
{
  question: "What does “Interested” mean on a post?",
    answer:
  "When someone taps “Interested,” a group or chat is created automatically so you both can connect and plan together based on the post.",
  },
{
  question: "Is it safe to chat with others on SavingSathi?",
    answer:
  "Yes. All users have the option to verify themselves, and chats happen in a controlled environment. You also have the ability to report or block users if needed.",
  },
{
  question: "Can businesses or vendors post on SavingSathi?",
    answer:
  "Yes! Vendors can post their real offers, run deals, or collaborate with users who are actively looking forshared savings or group offers.",
  },
  {
    question: "How do I delete or edit my post?",
      answer:
    "You can go to your profile → My Posts → choose the post you want to edit or delete.",
    },
    {
      question: "What if I need help?",
        answer:
      "You can contact SavingSathi’s support team directly from the app under the “Help & Support” section or write to us at support@savingsathi.com",
      },
];



export default function FaqClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (<>

    <section className="bg-black text-white min-h-screen">
      {/* Top header background image and title */}
      <div
        className="w-full h-70 flex justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bg3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <h1 className="text-4xl font-extrabold text-center tracking-wider z-10">
          <span className="text-white uppercase text-4xl">Faq </span>

        </h1>
        {/* Overlay for dark effect */}
        {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
      </div>

      {/* FAQ Items Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-4">
        {faqItems.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={i} className="rounded-md overflow-hidden">
              <button
                onClick={() => toggleIndex(i)}
                className={`flex justify-between items-center w-full p-4 py-6 text-left 
                  ${isActive
                    ? "bg-[#262626] text-cyan-700"

                    : "bg-[#262626] text-white hover:bg-neutral-700"
                  } 
                  font-semibold text-xl ${isActive
                    ? "rounded-0"

                    : "rounded-md"
                  }`}
              >
                <span>{item.question}</span>
                {/* {isActive ? (
                  <ChevronUpIcon className="w-5 h-5 text-orange-400" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )} */}
              </button>

              {isActive && (
                <div className="bg-neutral-900 p-4 border-t border-gray-700 text-gray-300 rounded-b-md">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
    </>);
}
