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
      <p>Cannabis and cannabinoid agents are widely used to alleviate symptoms or treat disease, but their efficacy for specific indications is not well established. For chronic pain, the analgesic effect remains unclear. A systematic review of randomized controlled trials was conducted examining cannabinoids in the treatment of chronic noncancer pain, including smoked cannabis, oromucosal extracts of cannabis-based medicine, nabilone, dronabinol, and a novel THC analogue. Pain conditions included neuropathic pain, fibromyalgia, rheumatoid arthritis, and mixed chronic pain. Fifteen of the 18 included trials demonstrated a significant analgesic effect of cannabinoids compared with placebo. Cannabinoid use was generally well tolerated; adverse effects most commonly reported were mild to moderate in severity. Overall, evidence suggests that cannabinoids are safe and moderately effective in neuropathic pain with preliminary evidence of efficacy in fibromyalgia and rheumatoid arthritis.</p>
      <p>While there is not enough evidence to suggest routine use of medicinal cannabis for alleviating chemotherapy-related nausea and vomiting by national or international cancer societies, therapeutic agents based on THC (e.g., dronabinol) have been approved for use as an antiemetic in the United States for a number of years. Only recently has the efficacy and safety of cannabis-based medicines in managing nausea and vomiting due to chemotherapy been evaluated. In a review of 23 randomized, controlled trials, patients who received cannabis-based products experienced less nausea and vomiting than subjects who received placebo. The proportion of people experiencing nausea and vomiting who received cannabis-based products was similar to those receiving conventional antiemetics. Subjects using cannabis-based products experienced side effects such as “feeling high,” dizziness, sedation, and dysphoria and dropped out of the studies at a higher rate due to adverse effects compared with participants receiving either placebo or conventional antiemetics. In crossover trials in which patients received cannabis-based products and conventional antiemetics, patients preferred the cannabis-based medicines. Cannabis-based medications may be useful for treating chemotherapy-induced nausea and vomiting that responds poorly to conventional antiemetics. However, the trials produced low to moderate quality evidence and reflected chemotherapy agents and antiemetics that were available in the 1980s and 1990s.</p>
      <p>With regard to the management of neurological disorders, including epilepsy and MS, a Cochrane review of four clinical trials that included 48 epileptic patients using CBD as an adjunct treatment to other antiepileptic medications concluded that there were no serious adverse effects associated with CBD use but that no reliable conclusions on the efficacy and safety of the therapy can be drawn from this limited evidence. The American Academy of Neurology (AAN) has issued a Summary of Systematic Reviews for Clinicians that indicates oral cannabis extract is effective for reducing patient-reported spasticity scores and central pain or painful spasms when used for MS. THC is probably effective for reducing patient-reported spasticity scores but is likely ineffective for reducing objective measures of spasticity at 15 weeks, the AAN found; there is limited evidence to support the use of cannabis extracts for treatment of Huntington’s disease, levodopa-induced dyskinesias in patients with Parkinson’s disease, or reducing tic severity in Tourette’s.</p>
      <p>In older patients, medical cannabinoids have shown no efficacy on dyskinesia, breathlessness, and chemotherapy-induced nausea and vomiting. Some evidence has shown that THC might be useful in treatment of anorexia and behavioral symptoms in patients with dementia. The most common adverse events reported during cannabinoid treatment in older adults were sedation-like symptoms.</p>
      <p>Despite limited clinical evidence, a number of medical conditions and associated symptoms have been approved by state legislatures as qualifying conditions for medicinal cannabis use. Table 1 contains a summary of medicinal cannabis indications by state, including select disease states and qualifying debilitating medical conditions or symptoms. The most common conditions accepted by states that allow medicinal cannabis relate to relief of the symptoms of cancer, glaucoma, human immunodeficiency virus/acquired immunodeficiency syndrome, and MS. A total of 28 states, the District of Columbia, Guam, and Puerto Rico now allow comprehensive public medical marijuana and cannabis programs</p>
      <p>Some of the most common policy questions regarding medical cannabis now include how to regulate its recommendation and indications for use; dispensing, including quality and standardization of cultivars or strains, labeling, packaging, and role of the pharmacist or health care professional in education or administration; and registration of approved patients and providers.</p>
      </div>
    </div>
  </div>
    
  );
}

export default History;