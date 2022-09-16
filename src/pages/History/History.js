import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/images/cannabis1.jpeg"
import slide2 from "../../assets/images/cannabis2.webp"
import slide3 from "../../assets/images/cannabis3.webp"
import slide4 from "../../assets/images/cannabis4.jpeg"
import slide5 from "../../assets/images/cannabis5.jpeg"
import slide6 from "../../assets/images/cannabis6.jpeg"

import style from "./History.module.css"

function History() {
  return (
    
  <div className={style.container}>
    <div>
    <Carousel className={style.carousel}>
    <Carousel.Item >
        <img
          className={style.image}
          src={slide4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide6}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide1}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide3}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className={style.infoContainer}>
      <h1 className={style.title}>Cannabis History 101</h1>
      <div className={style.text}>
      <h3 className={style.h3}>Intro</h3>
      <p>The history of medicinal cannabis goes back to the ancient times. Ancient physicians in many parts of the world mixed cannabis into medicines to treat pain and other ailments. In the 19th century, cannabis was introduced for therapeutic use in Western Medicine. Since then, there have been several advancements in how the drug is administered. Initially, cannabis was reduced to a powder and mixed with wine for administration. In the 1970s, synthetic THC was created to be administered as the drug Marinol in a capsule. However, the main mode of administration for cannabis is smoking because its effects are almost immediate when the smoke is inhaled. Between 1996 and 1999, eight U.S. states supported cannabis prescriptions opposing policies of the federal government. Most people who are prescribed marijuana for medical purposes use it to alleviate severe pain.</p>
      <h3 className={style.h3}>Ancient China</h3>
      <p>Cannabis, called má 麻 (meaning "hemp; cannabis; numbness") or dàmá 大麻 (with the compound Wikt:大, meaning "big; great") in Chinese, was used in Taiwan for fiber starting about 10,000 years ago. The botanist Hui-lin Li wrote that in China, "The use of Cannabis in medicine was probably a very early development. Since ancient humans used hemp seed as food, it was quite natural for them to also discover the medicinal properties of the plant".</p>
      <p>The early Chinese surgeon Hua Tuo (c. 140-208) is credited with being the first recorded person to use cannabis as an anesthetic. He reduced the plant to powder and mixed it with wine for administration prior to conducting surgery. The Chinese term for "anesthesia" (mázui 麻醉) literally means "cannabis intoxication". Elizabeth Wayland Barber says the Chinese evidence "proves a knowledge of the narcotic properties of Cannabis at least from the 1st millennium B.C." when ma was already used in a secondary meaning of "numbness; senseless." "Such a strong drug, however, suggests that the Chinese pharmacists had now obtained from far to the southwest not THC-bearing Cannabis sativa, but rather Cannabis indica.</p>
      <h3 className={style.h3}>Ancient Netherlands</h3>
      <p>In 2007, a late Neolithic grave attributed to the Beaker culture (found near Hattemerbroek, Gelderland; dated 2459-2203 BCE) was found containing an unusually large concentration of pollen. After five years of careful investigation these pollen were concluded to be mostly cannabis along with a smaller amount of meadowsweet. Due to the fever-reducing properties of meadowsweet, the archeologists speculated that the person in the grave had likely been very ill, in which case the cannabis would have served as painkiller.</p>
      <h3 className={style.h3}>Ancient Egypt</h3>
      <p>The Ebers Papyrus (c. 1550 BC) from Ancient Egypt describes medical cannabis. Other ancient Egyptian papyri that mention medical cannabis are the Ramesseum III Papyrus (1700 BC), the Berlin Papyrus (1300 BC) and the Chester Beatty Medical Papyrus VI (1300 BC). The ancient Egyptians used hemp (cannabis) in suppositories for relieving the pain of hemorrhoids. Around 2,000 BCE, the ancient Egyptians used cannabis to treat sore eyes. The egyptologist Lise Manniche notes the reference to "plant medical cannabis" in several Egyptian texts, one of which dates back to the eighteenth century BCE.</p>
      <h3 className={style.h3}>Ancient India</h3>
      <p>Cannabis was a major component in religious practices in ancient India as well as in medicinal practices. For many centuries, most parts of life in ancient India incorporated cannabis of some form. Surviving texts from ancient India confirm that cannabis' psychoactive properties were recognized, and doctors used it for treating a variety of illnesses and ailments. These included insomnia, headaches, a whole host of gastrointestinal disorders, and pain: cannabis was frequently used to relieve the pain of childbirth. One Indian philosopher expressed his views on the nature and uses of bhang (a form of cannabis), which combined religious thought with medical practices. "A guardian lives in the bhang leaf. […] To see in a dream the leaves, plant, or water of bhang is lucky. […] A longing for bhang foretells happiness. It cures dysentery and sunstroke, clears phlegm, quickens digestion, sharpens appetite, makes the tongue of the lisper plain, freshens the intellect and gives alertness to the body and gaiety to the mind. Such are the useful and needful ends for which in His goodness the Almighty made bhang".</p>
      <h3 className={style.h3}>Ancient Greece</h3>
      <p>The Ancient Greeks used cannabis to dress wounds and sores on their horses. In humans, dried leaves of cannabis were used to treat nose bleeds, and cannabis seeds were used to expel tapeworms. The most frequently described use of cannabis in humans was to steep green seeds of cannabis in either water or wine, later taking the seeds out and using the warm extract to treat inflammation and pain resulting from obstruction of the ear.In the 5th century BC Herodotus, a Greek historian, described how the Scythians of the Middle East used cannabis in steam baths. These baths drove the people to a frenzied state.</p>
      <h3 className={style.h3}>Modern history</h3>
      <p>In the mid 19th century, medical interest in the use of cannabis began to grow in the West. In the 19th century cannabis was one of the secret ingredients in several so called patent medicines. There were at least 2000 cannabis medicines prior to 1937, produced by over 280 manufacturers. The advent of the syringe and injectable medicines contributed to an eventual decline in the popularity of cannabis for therapeutic uses, as did the invention of new drugs such as aspirin.</p>
      <p>In 1964, Dr. Albert Lockhart and Manley West began studying the health effects of traditional cannabis use in Jamaican communities. They discovered that Rastafarians had unusually low glaucoma rates and local fishermen were washing their eyes with cannabis extract in the belief that it would improve their sight. Lockhart and West developed, and in 1987 gained permission to market, the pharmaceutical Canasol: one of the first cannabis extracts. They continued to work with cannabis, developing more pharmaceuticals and eventually receiving the Jamaican Order of Merit for their work.</p>
      <p>Later, in the 1970s, a synthetic version of THC was produced and approved for use in the United States as the drug Marinol. It was delivered as a capsule, to be swallowed. Patients complained that the violent nausea associated with chemotherapy made swallowing capsules difficult. Further, along with ingested cannabis, capsules are harder to dose-titrate accurately than smoked cannabis because their onset of action is so much slower. Smoking has remained the route of choice for many patients because its onset of action provides almost immediate relief from symptoms and because that fast onset greatly simplifies titration. For these reasons, and because of the difficulties arising from the way cannabinoids are metabolized after being ingested, oral dosing is probably the least satisfactory route for cannabis administration.</p>
      <p>Voters in eight U.S. states showed their support for cannabis prescriptions or recommendations given by physicians between 1996 and 1999,[needs update] including Alaska, Arizona, California, Colorado, Maine, Michigan, Nevada, Oregon, and Washington, going against policies of the federal government. In May 2001, "The Chronic Cannabis Use in the Compassionate Investigational New Drug Program: An Examination of Benefits and Adverse Effects of Legal Clinical Cannabis" (Russo, Mathre, Byrne et al.) was completed. This three-day examination of major body functions of four of the five living US federal cannabis patients found "mild pulmonary changes" in two patients.</p>
      <h3 className={style.h3}>Understanding Cannabinoids</h3>
      <p>Taking cannabis has the effects it has because it contains some unique drug chemicals called ‘cannabinoids’. The cannabinoid which is most important in making someone ‘stoned’ or ‘high’ is called THC. Some cannabis varieties (such as skunk) can contain much more THC than other types, and so give stronger effects or can be used in smaller amounts. However, scientists and cannabis users are also discovering that it’s not just the amount of THC that is important, but also the balance of THC with other cannabinoids, especially one called CBD. Cannabis varieties with lots of CBD (like most ‘hash’) might feel different (more relaxing, less confusing) and have a lower chance of causing harm, than cannabis varieties with little CBD (such as skunk). This is because CBD interacts with THC and reduces its “stoned” effects.</p>
      <p>Our minds respond to cannabinoids from cannabis because we have a system in our brains called the endocannabinoid system that it can interact with. This system has a role in controlling memory, mood, appetite, sleep and other functions. The endocannabinoid system is not there to be triggered by cannabinoids from cannabis; the fact that it can be manipulated by this plant may be due to a close co-evolution of humans and the cannabis plant family.</p>
      <p>The endocannabinoid system responds to the body’s own endocannabinoids; these are cannabinoid chemicals made in our brains. The effect of cannabinoids from cannabis on the endocannabinoid system doesn’t entirely explain how cannabis users feel and act when they are stoned. Without realising it, people learn to fit in with acting a certain way when they are stoned and around other stoned people. This helps explain why one substance, in different cultural contexts, can have such different effects.</p>
      <p>Cannabigerol (CBG) is a type of cannabinoid obtained from the cannabis plant. It’s often referred to as the mother of all cannabinoids. This is because other cannabinoids are derived from cannabigerolic acid (CBGA), an acidic form of CBG. CBG is found in smaller quantities than other cannabinoids in cannabis plants. In most strains of the plant, only 1% of CBG can be found compared to 20 to 25% of CBD or 25 to 30% of THC. Some promising animal studies show that CBG might ultimately be found useful for the treatment of Inflammatory Bowel Disease (IBD), Glaucoma, Huntington's Disease and also fighting cancer cells.</p>
      <p>As for CBD, studies have suggested this cannabinoid can be used to help treat chronic pain, anxiety, depression, epilepsy, symptoms related to cancer treatment, acne and other skin issues, high blood pressure, addiction and diabetes.</p>
      </div>
    </div>
  </div>
    
  );
}

export default History;