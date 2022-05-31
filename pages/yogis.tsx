import type { NextPage } from "next";
import Image from "next/image";
import handstands from "../public/handstands.png";
import { Page } from "../src/page/Page";
import styles from "../styles/Yogis.module.css";
import ekansh from "../public/ekansh.jpeg";

const YOGIS = [
  {
    firstName: "Ekansh",
    lastName: "Vinaik",
    role: "Founder",
    image: ekansh,
    bio: "Ekansh comes from a lineage of yogis. He can typically be found upside down, probably injured, somewhere not far from a circus.",
    hobbies: ["snowboarding", "handstands"],
  },
  {
    firstName: "Alyssa",
    lastName: "Factor",
    role: "Yogi",
    // image: ekansh,
    bio: "Alyssa can hold a plank longer than most of us can hold down dog. She spends her summers in Montauk with her guru, Lauren Hanna.",
    hobbies: ["gymnastics", "planking", "not tangerines"],
  },
  {
    firstName: "Anokhi",
    lastName: "Bafna",
    role: "Yogi",
    // image: ekansh,
    bio: "Anokhi grew up in Bangalore, and has been practicing yoga since she was quite literally a baby. Her class will have you learning Sanskrit in no time. She's en route to getting her 500 HR RYT.",
    hobbies: ["eka pada raja kapotasana"],
  },
  {
    firstName: "(re-)Becca",
    lastName: "Light",
    role: "Yogi",
    // image: ekansh,

    bio: "Becca has been practicing her pointe since the age most of us get potty trained, and her dance (+pilates skills) make her classes tougher than most. She's (also) en route to getting her 500 HR RYT.",

    hobbies: ["dance"],
  },
  {
    firstName: "Isa",
    lastName: "Rocha",
    role: "Yogi",
    // image: ekansh,
    bio: "Isa comes from Brazil, and her mother is a meditation guru. She can calm anyone down, whether it's you, your dog, or your 9 student yogis.",
    hobbies: ["meditation"],
  },
  {
    firstName: "Joe",
    lastName: "Hipp",
    role: "Kapha King",
    // image: ekansh,
    bio: "Joe might seem like a teddy bear, but don't let his calm demeanor fool you — his restorative classes can be some of the studio's hardest.",
    hobbies: ["the rest of us"],
  },
  {
    firstName: "Megan",
    lastName: "Lucky",
    role: "Vata Expert",
    // image: ekansh,
    bio: "Megan is the vata powerhouse of the team. Her vata dosha is what inspired this studio, and there's no one else that does it better.",
    hobbies: ["her roommate", "vata"],
  },
  {
    firstName: "Mikayla",
    lastName: "Gardner",
    role: "Yogi",
    // image: ekansh,
    bio: "Mikayla metaphorically keeps us on our toes, and might keep you in a real toe stand — catch her in a dancer's pose during the pre-class warmup.",
    hobbies: ["dance", "graduating college"],
  },
];

const Yogis: NextPage = () => {
  return (
    <Page>
      <div className={styles.container}>
        {YOGIS.map(({ firstName, image, lastName, role, bio, hobbies }) => (
          <div className={styles.row} key={`${firstName}/${lastName}`}>
            <div className={styles.headshot}>
              {image && (
                <Image alt={firstName} src={image} width={150} height={150} />
              )}
              <h3 className={styles.name}>{firstName}</h3>
              <div className={styles.role}>{role}</div>
            </div>
            <div className={styles.text}>
              <p>{bio}</p>
              <p className={styles.hobbies}>
                things that power their vata: {hobbies.join(", ")}
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Yogis;
