import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const Sittings = () => {
  const [thieme, setThieme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0);

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];
  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "16px",
    },
    {
      title: "Large",
      value: "20px",
    },
  ];
  const animationSpeedList = [
    {
      title: "Slow",
      value: "2",
    },
    {
      title: "Medium",
      value: "1",
    },
    {
      title: "Fast",
      value: ".5",
    },
  ];

  const [mySettings, setMySettings] = useState({
    "--bg-color": "#fff",
    "--bg-light": "#fff",
    "--primary-color": "rgb(255, 0, 85)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });

  const themes = [
    {
      "--bg-color": "#fff",
      "--bg-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--bg-color": "rgb(29, 29, 29)",
      "--bg-light": "#282626",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const changeThieme = (idx) => {
    const singleThieme = { ...themes[idx] };
    setThieme(idx === 0 ? "light" : "dark");
    let selectedSittings = { ...mySettings };
    for (const key in singleThieme) {
      selectedSittings[key] = singleThieme[key];
    }
    setMySettings(selectedSittings);
  };
  const changePrimaryColor = (idx) => {
    const myColor = primaryColors[idx];
    let selectedSettings = { ...mySettings };
    selectedSettings["--primary-color"] = myColor;
    setPrimaryColor(idx);
    setMySettings(selectedSettings);
  };
  const changeFontSize = (idx) => {
    const myFont = fontSizes[idx]["value"];
    let selectedFonts = { ...mySettings };
    selectedFonts["--font-size"] = myFont;
    setFontSize(idx);
    setMySettings(selectedFonts);
  };
  const changeSpeed = (idx) => {
    const mySpeed = animationSpeedList[idx]["value"];
    let selectedSpeed = { ...mySettings };
    selectedSpeed["--animation-speed"] = mySpeed;
    setAnimationSpeed(idx);
    setMySettings(selectedSpeed);
  };
  useEffect(() => {
    const root = document.documentElement;

    for (const key in mySettings) {
      root.style.setProperty(key, mySettings[key]);
    }
  }, [mySettings]);

  return (
    <section className="section sittings">
      <div className="options">
        <h2 className="title"> Prefered Thieme </h2>
        <div className="option-container prefered-thieme">
          <div className="light" onClick={() => changeThieme(0)}>
            {thieme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="dark" onClick={() => changeThieme(1)}>
            {thieme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="options">
        <h2 className="title"> primary color</h2>
        <div className="option-container prefered-thieme">
          {primaryColors.map((color, index) => {
            return (
              <div
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => changePrimaryColor(index)}
              >
                {primaryColor === index && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="options">
        <h2 className="title"> Font sizes</h2>
        <div className="option-container ">
          {fontSizes.map(({ title }, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => changeFontSize(index)}
              >
                {title}

                {fontSize === index && <FontAwesomeIcon icon={faCheck} />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="options">
        <h2 className="title">Animation Speed </h2>
        <div className="option-container ">
          {animationSpeedList.map(({ title }, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => changeSpeed(index)}
              >
                {title}

                {animationSpeed === index && <FontAwesomeIcon icon={faCheck} />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sittings;
