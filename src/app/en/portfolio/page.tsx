import Footer from "@/components/footer";
import Header_en from "@/components/header_en";
import Link from "next/link";

export default function About() {
    return (
      <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-full lg:mx-4 bg-red-400">
          <div className="flex w-full items-center justify-between px-4">
            <Header_en />
            <Link href="/fr/portfolio" className="pr-4 pb-24 self-end">Français</Link>
          </div>
          <div className="pl-12 pr-12 w-full bg-red-300 flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 w-full my-10">Portfolio</h1>
            <h2 className="text-2xl mt-6 mb-4">Translations</h2>
            <h3 className="mt-6 mb-4">Books</h3>
            <ul>
              <li>• Matthieu Richelle, The Bible and Archaeology (Peabody, MA, Hendrickson, 2018) (translated from La Bible et l’archéologie, Charols, Excelsis, 1st edition 2012)</li>
              <li>• Matthieu Richelle, Interpreting Israel’s Scriptures: A Practical Guide to the Exegesis of the Hebrew Bible/Old Testament (Peabody, MA, Hendrickson, 2022) (translated and adapted from Guide pour l’exégèse de l’Ancien Testament: Méthodes, exemples et instruments de travail [Vaux-sur-Seine/Charols, Edifac/Excelsis, 2012).</li>
              <li>• Marc Rastoin, Jesus, With Style: Luke’s Literary and Theological Genius (Leuven, Peeters, 2023) (translated with Lauren Bergier from various articles).</li>
            </ul>
            <h2 className="text-2xl mt-6 mb-4">Copyediting</h2>
            <h3 className="mt-6 mb-4">Journals</h3>
            <ul>
              <li>• Ephemerides Theologicae Louvanienses (ETL): language copyediting for most English-language articles since October 2022.</li>
              <li>• Augustiniana: language copyediting for English-language reviews since November 2023.</li>
              <li>• Revue d’Histoire Ecclésiastique (RHE): language copyediting for English-language articles and reviews since January 2024.</li>
            </ul>
            <h3 className="mt-6 mb-4">Articles</h3>
            <ul>
              <li>• Régis Burnet, “How to Do Things with Letters: The Pragmatics of Pauline Epistolography.”</li>
              <li>• Matthieu Richelle, Literacy and Scribalism in Ancient Israel (1200/1150–586 BCE),” in Ancient Israel World, ed. K. M. Keimer and G. Pierce (Routledge Worlds; London: Routledge, 2022), 335-347.</li>
              <li>• Nev Reyes-Espiritu, “Caregivers Need Care, Too: Conceptualizing Spiritual Care for Transnational Mothers/Migrant Caregivers,” in Religions 13 (2022), 173–191.</li>
              <li>• Régis Burnet, “The Reception of the Books of Kings in the Church Fathers,” in The Oxford Handbook of the Books of Kings, (Oxford, Oxford University Press, 2024), 416–430.</li>
              <li>• Sel lam El Ammari Alonso, “The ‘Babel-Like Confusion’ Persists: Review of Scott B Noegel’s ‘Wordplay’ in Ancient Near Eastern Texts,” in Journal Of Northwest Semitic Languages 50,1-2 (2024), 1–21.</li>
              <li>• Reinhart Ceulemans, “The Structure of the Popular Catena on Genesis,” in Phenomena of Order and Disorder in Greek Exegetical Catenae / Ordres et désordres dans les chaînes exégétiques grecques, ed. Agnès Lorrain and Jean-Marie Auwers (Turnhout, Brepols, 2022)</li>
              <li>• Régis Burnet, “Who Said Armageddon Was Megiddo?” In Revue Biblique (2024).</li>
              <li>• Marie Pauliat, “Could the ‘Vienna Collection’ be a Donatist Catechism? A Critical Analysis of the State of Research.”</li>
              <li>• Silvia Notarfonso, “Animal Sacrifice and ‘Schismatic’ Celebrations among Bulgarian Paulicians (17th-18th Centuries),” in The Inquisition and the Christian East, 1350-1850, ed. Cesare Santus, Jean-Pascal Gay and Laurent Tatarenko.</li>
              <li>• Dennj Solera, “Toward the Union of Brest: Gian Vincenzo Pinelli between the Roman Inquisition, the Ruthenian-Orthodox and the Venetian Greek-Orthodox,” in The Inquisition and the Christian East, 1350-1850, ed. Cesare Santus, Jean-Pascal Gay and Laurent Tatarenko.</li>
              <li>• Jean-Pascal Gay, “The Inconsistent Observer. The Roman Inquisition and the Greek Community of Paomia in Corsica (Seventeenth–Eighteenth Centuries),” in The Inquisition and the Christian East, 1350-1850, ed. Cesare Santus, Jean-Pascal Gay and Laurent Tatarenko.</li>
              <li>• Zinan Zhang and Anthony Dupont, “Temporal Spirituality? Philosophical Inquiries into Time and Spirituality in the Early Oeuvre of Augustine of Hippo,” Studies in Spirituality (2024).</li>
              <li>• Athanase Bukin and Anthony Dupont, “Re-examining Augustine’s De baptismo contra Donatistas: A Case for a Refined Chronology.”</li>
              <li>• Charles Doyen, “Ancient Weights from Syria and Phoenicia in Henri Seyrig’s Archives,” in Shopping and Weighing Instruments in the Mediterranean World and Beyond throughout History, ed. Oğuz Tekin (in press).</li>
              <li>• Kristiaan Venken and Anthony Dupont, “Turning Evil to Good (ciu. 22.1): The Anatomy of Evil in Augustine’s De ciuitate Dei”.</li>
              <li>• Metha Hokke, “Ambrose’s Virginity Treatises: Destined For Virginity or a Free Choice,” in Augustiniana (forthcoming).</li>
              <li>• Simon Naveau, “Old Greek of Numbers & Deuteronomion is Not Affected by Alexandrian Milieu: Translation of ‘Sea’”.</li>
              <li>• C.J. (Niels) de Bruijn, “Ex nudo Dei beneplacito. On Concord and Discord between Luis de Molina&apos;s Concordia and Leonardus Lessius’s De gratia efficaci.”</li>
            </ul>
            <h3 className="mt-6 mb-4">Books</h3>
            <ul>
              <li>• Do We Still Need Inspiration? Scriptures and Theology, ed. Matthieu Richelle, Camilla Recalcati and Martijn Beukenhorst (Berlin, De Gruyter, 2024).</li>
              <li>• Revelation’s New Jerusalem in Late Antiquity, ed. Nathan Betz, Anthony Dupont and Johan Leemans (Tübingen, Mohr Siebeck, 2023) (technical copyedit with some language editing)</li>
              <li>• Histoire, société et études islamiques au 21e siècle. Directions, connexions, approaches, ed. Vincent Legrand and Ayang Utriza Yakin (Berlin/Boston, De Gruyter, 2024) (language copyedit, certain chapters only).</li>
            </ul>
            <h3 className="mt-6 mb-4">PhD theses</h3>
            <ul>
              <li>• Nathan Betz, City of Gods: The New Jerusalem of John’s Revelation in Early Christianity (through ca. 313), PhD, KU Leuven. Defended on May 30, 2022, later published in Vigiliae Christianae, Supplements 186, 2025 (proofreading).</li>
              <li>• Bruno Marien, Recommendation letters of Libanius: comparison with the wider ancient epistolary practice and means of promoting interests of his multiple petitioners, PhD, KU Leuven/Ghent University, defended in 2023 (technical and language copyedit).</li>
              <li>• Camilla Recalcati, Talk Like an Egyptian: Egyptian Influences on the Greek (LXX) of Genesis, Exodus, and Leviticus, PhD, UC Louvain, defended on 28 May 2024 (language copyedit, certain chapters only).</li>
              <li>• Beatrice Bonanno, The Septuagint of Ruth: Translation Technique, Textual History and Theological Issues, PhD, UC Louvain, defended on 20 April 2024, later published by Brepols (Turnhout, 2024) (language copyedit).</li>
            </ul>
            <h3 className="mt-6 mb-4">Texts for Oral Presentations</h3>
            <ul>
              <li>• Ellen De Doncker, ‘From Your Mouth to God’s Ears’: The Septuagint’s Treatment of God’s Ears in the Pentateuch (oral presentation at SASNES, LXXSA and OTSSA Annual Meeting, University of the Free State, South Africa (Online) [30/08/2021 to 03/09/2021]).</li>
              <li>• Natasha Luna Malaga, “’Deform’d, unfinish’d, sent before my time’: the shift in perspective on the body, being, and the I, through a dialogue between Berlinde de Bruyckere’s art and Jean-Luc Nancy’s thought.”</li>
              <li>• Fabrizio Marcello, “Feeding Before the End: Luke 12:41–46 in Light of the Zenon Archive” (oral presentation at EABS Annual Conference 2024, Sofia).</li>
              <li>• Natasha Luna Malaga, “Through the back door: The non-sublime side of the Kantian sublime and its contribution to art.”</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );
  }