import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/images/slide1.jpeg"
import slide2 from "../../assets/images/slide2.jpeg"
import slide3 from "../../assets/images/slide3.jpeg"
import slide4 from "../../assets/images/slide4.jpeg"
import style from "./History.module.css"

function History() {
  return (
    
  <div className={style.container}>
    <div>
    <Carousel className={style.carousel}>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className={style.image}
          src={slide4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className={style.infoContainer}>
      <h1 className={style.title}>Cannabis History 101</h1>
      <div className={style.text}>
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
      </div>
    </div>
  </div>
    
  );
}

export default History;