import Footer from "@/components/footer";
import Header_en from "@/components/header_en";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/fr/home" className="pr-4 pb-24 self-end">Français</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10 text-red-400">Mullen Academic English Services</h1>
            <Image src="/old-library-5.jpg" alt="Logo" width={700} height={80} priority />
            <p className="text-2xl font-bold font-forum text-white text-center w-full my-10">
            TRANSLATION, COPYEDITING, PROOFREADING/REVISION AND PRONUNCIATION TRAINING
            <br />
            IN ENGLISH
            <br />
            FOR PROFESSORS, STUDENTS AND ACADEMIC PUBLISHERS
            </p>
            <div className="text-xl font-bold font-forum text-white w-full my-10">
            Accurate English is important. Whether you are writing your thesis, giving a paper at a conference or publishing an article or book, the use of clear and correct English will help you to communicate your ideas convincingly, without distractions.

            Mullen Academic English Services can provide the following services:
            <br/>
            <br/>
            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                <li>Copyediting/Proofreading/Revision of texts</li>
                <li>Translation from French to English</li>
                <li>Pronunciation training</li>
                <li>General English lessons</li>
            </ul>
            </div>
        </div>
        <div className="pl-12 pr-12 w-full items-center flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10">Client Testimonials</h1>
            <div className="testimonial-grid">
                <div className="testimonial centered">
                    <p>
                    This is EXACTLY what I need. Not only did Sarah correct my linguistic mistakes, but she also improved my style. It is rare to be able to entrust my manuscript to someone who has solid training in the Humanities and ancient languages. She also got the work done quickly. I am very impressed.</p>
                    <br />
                    <span>RÉGIS BURNET, NEW TESTAMENT PROFESSOR, VICE-DEAN, FACULTY OF THEOLOGY, UCLOUVAIN</span>
                </div>
            </div>
        </div>
        <div className="pl-12 w-full bg-cyan-950 items-center flex flex-row">
            <div className="flex flex-col gap-2 text-red-400 pr-12">
                <h1 className="text-5xl font-bold font-forum-regular text-center w-full mt-10">Services</h1>
                <div className="flex flex-col my-2">
                    <h2 className="text-2xl font-bold font-forum-regular text-center w-full">Copyediting/Proofreading/Revision of English texts</h2>
                    <p className="text-xl font-bold font-forum text-white w-full">
                    For theses and dissertations, articles and books, project proposals and funding requests, I provide meticulous and appropriate corrections whilst maintaining your authorial &quot;voice&quot;.
                    </p>
                </div>
                <div className="flex flex-col my-2">
                    <h2 className="text-2xl font-bold font-forum-regular text-center w-full">Translation</h2>
                    <p className="text-xl font-bold font-forum text-white w-full">
                    Have you given a paper in French but would like to publish it in English? Or would you simply appreciate a professional translation, without having to struggle to express your ideas in English? I will translate into accurate, idiomatic English that respects academic norms.
                    </p>
                </div>
                <div className="flex flex-col my-2">
                    <h2 className="text-2xl font-bold font-forum-regular text-center w-full">Pronunciation Training</h2>
                    <p className="text-xl font-bold font-forum text-white w-full">
                    In order for your paper or presentation to have maximum impact, it is important that your listeners understand what you are saying and are not distracted by your accent or by errors of pronunciation. I can go through your paper with you, helping you to correct your pronunciation and to communicate your ideas clearly.
                    </p>
                </div>
                <div className="flex flex-col my-2">
                    <h2 className="text-2xl font-bold font-forum-regular text-center w-full">English Lessons</h2>
                    <p className="text-xl font-bold font-forum text-white w-full">
                    Improving your English is always useful, whether for fielding questions after a presentation, talking to other researchers at a conference, networking or getting involved in research projects.
I can help you make progress and gain confidence in spoken and written English, through personalised lessons. Contact me to let me know what your needs are.
                    </p>
                </div>
             </div>
             <Image src="/writing.png" alt="Writing" width={400} height={80} priority className="self-end align-self-end ml-auto" />
        </div>
        <div className="p-12 w-full bg-red-400 items-center flex flex-col text-center">
            <h1 className="text-5xl font-bold font-forum-regular text-black text-center w-full my-10">Specialist areas</h1>
            <h6 className="font-bold font-forum text-black w-full px-12">I specialise in services in English to the world of academia (students, professors and researchers, academic publishers). For translation, copyediting and proofreading, I work on texts from the humanities. My particular areas of specialisation are theology (I have a good level of ancient Hebrew and Greek), history, archaeology, epigraphy, paleography, as well as literature in Latin, Classical Greek, French and English.</h6>
        </div>
      </main>
        <Footer/>
    </div>
  );
}
