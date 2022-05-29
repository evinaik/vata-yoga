import dayjs from "dayjs";
import type { NextPage } from "next";
import Image from "next/image";
import handstands from "../public/handstands.png";
import team from "../public/team.png";
import { Page } from "../src/page/Page";
import styles from "../styles/Home.module.css";

const times = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const calendar = [
  {
    time: "7:00 AM",
    name: "vata flow",
    teacher: "Ekansh",
    days: [1, 2, 3, 4, 5],
  },
  {
    time: "7:00 AM",
    name: "meditation",
    teacher: "Isa",
    days: [0, 6],
  },
  {
    time: "8:00 AM",
    name: "power flow",
    teacher: "Anokhi",
    days: [1, 3, 5],
  },
  {
    time: "10:00 AM",
    name: "restorative",
    teacher: "Joe",
    days: [0, 3, 6],
  },
  {
    time: "12:00 PM",
    name: "vata flow",
    teacher: "Megan",
    days: [0, 2, 4, 5, 6],
  },
  {
    time: "2:00 PM",
    name: "handstand",
    teacher: "Alyssa",
    days: [0, 6],
  },
  {
    time: "4:00 PM",
    name: "flow 3",
    teacher: "Alyssa",
    days: [3, 5],
  },
  {
    time: "6:00 PM",
    name: "beginner yoga",
    teacher: "Mikayla",
    days: [1, 3, 5],
  },
  {
    time: "6:00 PM",
    name: "flow 2",
    teacher: "Becca",
    days: [0, 2, 4],
  },
];

const thisWeek = dayjs().startOf("w");
const days = [
  thisWeek.format("dddd, MMM D"),
  thisWeek.add(1, "d").format("dddd, MMM D"),
  thisWeek.add(2, "d").format("dddd, MMM D"),
  thisWeek.add(3, "d").format("dddd, MMM D"),
  thisWeek.add(4, "d").format("dddd, MMM D"),
  thisWeek.add(5, "d").format("dddd, MMM D"),
  thisWeek.add(6, "d").format("dddd, MMM D"),
];

const Home: NextPage = () => {
  return (
    <Page>
      <h1 className={styles.title}>
        <span>vata yoga</span>
      </h1>

      <div className={styles.handstand}>
        <Image alt="handstands" src={handstands} width={600} height={600} />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td></td>
            <td>{days[0]}</td>
            <td>{days[1]}</td>
            <td>{days[2]}</td>
            <td>{days[3]}</td>
            <td>{days[4]}</td>
            <td>{days[5]}</td>
            <td>{days[6]}</td>
          </tr>
        </thead>
        <tbody>
          {times.map((time) => {
            return (
              <tr key={time}>
                <td>{time}</td>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                  const key = `${time}/${day}`;
                  const classObj = calendar.find(
                    ({ time: classTime, days }) =>
                      days.includes(day) && classTime === time
                  );
                  if (!classObj) {
                    return <td key={key} />;
                  }

                  const { name, teacher } = classObj;

                  return (
                    <td key={key}>
                      <div>{name}</div>
                      <div className={styles.teacher}>{teacher}</div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.schedule}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          return (
            <div key={day}>
              <h3>{days[day]}</h3>
              <ul className={styles.ul}>
                {calendar.map(({ days, name, time, teacher }) => {
                  const key = `${time}/${day}`;
                  if (!days.includes(day)) {
                    return null;
                  }

                  return (
                    <li key={key}>
                      {time}: {name} with {teacher}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className={styles.team}>
        <Image alt="team" src={team} />
      </div>
    </Page>
  );
};

export default Home;
