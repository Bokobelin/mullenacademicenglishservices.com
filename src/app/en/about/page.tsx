import Footer from "@/components/footer";
import Header_en from "@/components/header_en";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full mx-4">
        <div className="flex w-full items-center justify-between px-4">
          <Header_en />
          <Link href="/fr/about" className="pr-4 pb-24 self-end">Français</Link>
        </div>
        <div className="pl-12 pr-12 w-full bg-cyan-950 items-center flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 text-center w-full my-10">About Sarah Mullen</h1>
            <Image src="/sarah.png" alt="Sarah" width={300} height={80} priority />
            <p className="text-white font-forum lg:px-32 mt-14">
I have always been interested in words, language and litterature. I come from a family who used to keep a dictionary near the dining table in order to look up words during the meal, if something came up in conversation.
<br/>
<br/>
I have a degree in Classics from Oxford University and have studied Theology in France. I have also trained as a proofreader with the Chartered Institute of Editing and Proofreading (CIEP).
<br/>
<br/>
I have worked in a  variety of contexts, especially helping students to study biblical texts, supervising online theology courses and marking students&apos; work.
<br/>
<br/>
For over ten years I have assisted my husband, who is a researcher, by translating and/or re-reading his articles (30 articles including a dozen in top peer-reviewed journals and six peer-reviewed chapters in books), translating two of his books, and helping him prepare for conferences and interviews in English. I have a good understanding of the academic world and of the needs and expectations of professors, students and academic publishers.
​<br/>
<br/>
I have also taught English as a private tutor to individuals and groups. I have many years&apos; experience of working with those for whom English is not their first language.
<br/>
<br/>
I was born and grew up in England, and have lived in France and Belgium since 2002.
<br/>
<br/>
I combine a meticulous attention to detail with a love for language. I am patient and approachable. If you need help with your academic English projects, please contact me.
            </p>
            <Image src="/ciep.png" alt="CIEP" width={400} height={80} priority className="self-center justify-center align-self-center" />
            <h6 className="font-forum-regular text-2xl text-red-400">
                Affiliation
            </h6>
            <p className="text-xl text-white font-forum">Member of the <Link className="underline" href="https://www.ciep.uk/">Chartered Institute of Editing and Proofreading (CIEP)</Link></p>
        </div>
     </main>
     <Footer />
    </div>
        );
    }
