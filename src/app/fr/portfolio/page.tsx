import Footer from "@/components/footer";
import Header_fr from "@/components/header_fr";
import Link from "next/link";

export default function Portfolio() {
    return (
      <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full overflow-x-hidden bg-red-400">
        <main className="flex flex-col row-start-2 items-center sm:items-start w-full lg:mx-4">
          <div className="flex w-full items-center justify-between px-4">
            <Header_fr />
            <Link href="/en/portfolio" className="pr-4 pb-24 self-end">English</Link>
          </div>
          <div className="pl-12 pr-12 w-full bg-cyan-950 flex flex-col pb-12">
            <h1 className="text-5xl font-bold font-forum-regular text-red-400 w-full my-10">Travaux réalisés</h1>
            <h2 className="text-2xl">Traductions</h2>
            <h3>Livres</h3>
            <ul>
              <li>• Matthieu Richelle, The Bible and Archaeology (Peabody, MA, Hendrickson, 2018) (traduit de La Bible et l’archéologie, Charols, Excelsis, 1re édition 2012)</li>
              <li>• Matthieu Richelle, Interpreting Israel’s Scriptures: A Practical Guide to the Exegesis of the Hebrew Bible/Old Testament (Peabody, MA, Hendrickson, 2022) (traduit et adapté de Guide pour l’exégèse de l’Ancien Testament: Méthodes, exemples et instruments de travail [Vaux-sur-Seine/Charols, Edifac/Excelsis, 2012).</li>
              <li>• Marc Rastoin, Jesus, With Style: Luke’s Literary and Theological Genius (Leuven, Peeters, 2023) (traduit avec Lauren Bergier de plusieurs articles).</li>
            </ul>
            <h2 className="text-2xl">Relecture et correction de l’anglais</h2>
            <h3>Revues</h3>
            <ul>
              <li>• Ephemerides Theologicae Louvanienses (ETL): correction de l’anglais de la plupart des articles en anglais depuis octobre 2022.</li>
              <li>• Augustiniana: correction de l’anglais des articles en anglais depuis novembre 2023.</li>
              <li>• Revue d’Histoire Ecclésiastique (RHE): correction de l’anglais des articles en anglais depuis Janvier 2024.</li>
            </ul>
            <h3>Articles</h3>
            <ul>
              <li>• Régis Burnet, “How to Do Things with Letters: The Pragmatics of Pauline Epistolography.”</li>
              <li>• Matthieu Richelle, Literacy and Scribalism in Ancient Israel (1200/1150–586 BCE),” dans Ancient Israel World, ed. K. M. Keimer et G. Pierce (Routledge Worlds; London: Routledge, 2022), 335-347.</li>
              <li>• Nev Reyes-Espiritu, “Caregivers Need Care, Too: Conceptualizing Spiritual Care for Transnational Mothers/Migrant Caregivers,” dans Religions 13 (2022), 173–191.</li>
              <li>• Régis Burnet, “The Reception of the Books of Kings in the Church Fathers,” dans The Oxford Handbook of the Books of Kings, (Oxford, Oxford University Press, 2024), 416–430.</li>
              <li>• Sel lam El Ammari Alonso, “The ‘Babel-Like Confusion’ Persists: Review of Scott B Noegel’s ‘Wordplay’ in Ancient Near Eastern Texts,” dans Journal Of Northwest Semitic Languages 50,1-2 (2024), 1–21.</li>
              <li>• Reinhart Ceulemans, “The Structure of the Popular Catena on Genesis,” dans Phenomena of Order and Disorder in Greek Exegetical Catenae / Ordres et désordres dans les chaînes exégétiques grecques, éd. Agnès Lorrain et Jean-Marie Auwers (Turnhout, Brepols, 2022)</li>
              <li>• Régis Burnet, “Who Said Armageddon Was Megiddo?” dans La Revue Biblique (2024).</li>
              <li>• Marie Pauliat, “Could the ‘Vienna Collection’ be a Donatist Catechism? A Critical Analysis of the State of Research.”</li>
              <li>• Silvia Notarfonso, “Animal Sacrifice and ‘Schismatic’ Celebrations among Bulgarian Paulicians (17th-18th Centuries),” dans The Inquisition and the Christian East, 1350-1850, éd. Cesare Santus, Jean-Pascal Gay et Laurent Tatarenko.</li>
              <li>• Dennj Solera, “Toward the Union of Brest: Gian Vincenzo Pinelli between the Roman Inquisition, the Ruthenian-Orthodox and the Venetian Greek-Orthodox,” dans The Inquisition and the Christian East, 1350-1850, éd. Cesare Santus, Jean-Pascal Gay et Laurent Tatarenko.</li>
              <li>• Jean-Pascal Gay, “The Inconsistent Observer. The Roman Inquisition and the Greek Community of Paomia in Corsica (Seventeenth–Eighteenth Centuries),” dans The Inquisition and the Christian East, 1350-1850, éd. Cesare Santus, Jean-Pascal Gay et Laurent Tatarenko.</li>
              <li>• Zinan Zhang et Anthony Dupont, “Temporal Spirituality? Philosophical Inquiries into Time and Spirituality in the Early Oeuvre of Augustine of Hippo,” Studies in Spirituality (2024).</li>
              <li>• Athanase Bukin et Anthony Dupont, “Re-examining Augustine’s De baptismo contra Donatistas: A Case for a Refined Chronology.”</li>
              <li>• Charles Doyen, “Ancient Weights from Syria and Phoenicia in Henri Seyrig’s Archives,” dans Shopping and Weighing Instruments in the Mediterranean World and Beyond throughout History, éd. Oğuz Tekin (sous presse).</li>
              <li>• Kristiaan Venken et Anthony Dupont, “Turning Evil to Good (ciu. 22.1): The Anatomy of Evil in Augustine’s De ciuitate Dei”.</li>
              <li>• Metha Hokke, “Ambrose’s Virginity Treatises: Destined For Virginity or a Free Choice,” dans Augustiniana (à paraître).</li>
              <li>• Simon Naveau, “Old Greek of Numbers & Deuteronomion is Not Affected by Alexandrian Milieu: Translation of ‘Sea’”.</li>
              <li>• C.J. (Niels) de Bruijn, “Ex nudo Dei beneplacito. On Concord and Discord between Luis de Molina's Concordia and Leonardus Lessius’s De gratia efficaci.”</li>
            </ul>
            <h3>Livres</h3>
            <ul>
              <li>• Do We Still Need Inspiration? Scriptures and Theology, éd. Matthieu Richelle, Camilla Recalcati et Martijn Beukenhorst (Berlin, De Gruyter, 2024).</li>
              <li>• Revelation’s New Jerusalem in Late Antiquity, éd. Nathan Betz, Anthony Dupont et Johan Leemans (Tübingen, Mohr Siebeck, 2023) (correction technique, avec correction de l’anglais pour certains chapitres).</li>
              <li>• Histoire, société et études islamiques au 21e siècle. Directions, connexions, approaches, éd. Vincent Legrand et Ayang Utriza Yakin (Berlin/Boston, De Gruyter, 2024) (correction de l’anglais, uniquement certains chapitres).</li>
            </ul>
            <h3>Thèses de doctorat</h3>
            <ul>
              <li>• Nathan Betz, City of Gods: The New Jerusalem of John’s Revelation in Early Christianity (through ca. 313), PhD, KU Leuven. Soutenu le 30 mai, 2022, publié dans Vigiliae Christianae, Supplements 186, 2025 (relecture finale).</li>
              <li>• Bruno Marien, Recommendation letters of Libanius: comparison with the wider ancient epistolary practice and means of promoting interests of his multiple petitioners, PhD, KU Leuven/Ghent University, soutenu en 2023 (relecture et correction de l’anglais et des normes éditoriales).</li>
              <li>• Camilla Recalcati, Talk Like an Egyptian: Egyptian Influences on the Greek (LXX) of Genesis, Exodus, and Leviticus, PhD, UC Louvain, soutenu le 28 mai 2024 (correction de l’anglais, uniquement certains chapitres).</li>
              <li>• Beatrice Bonanno, The Septuagint of Ruth: Translation Technique, Textual History and Theological Issues, PhD, UC Louvain, soutenu le 20 avril 2024, publié par Brepols (Turnhout, 2024) (correction de l’anglais).</li>
            </ul>
            <h3>Textes pour présentations orales</h3>
            <ul>
              <li>• Ellen De Doncker, ‘From Your Mouth to God’s Ears’: The Septuagint’s Treatment of God’s Ears in the Pentateuch (papier lu à SASNES, LXXSA and OTSSA Annual Meeting, University of the Free State, South Africa (Online) [30/08/2021 to 03/09/2021]).</li>
              <li>• Natasha Luna Malaga, “’Deform’d, unfinish’d, sent before my time’: the shift in perspective on the body, being, and the I, through a dialogue between Berlinde de Bruyckere’s art and Jean-Luc Nancy’s thought.”</li>
              <li>• Fabrizio Marcello, “Feeding Before the End: Luke 12:41–46 in Light of the Zenon Archive” (papier lu à EABS Annual Conference 2024, Sofia).</li>
              <li>• Natasha Luna Malaga, “Through the back door: The non-sublime side of the Kantian sublime and its contribution to art.”</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );
}