import { useRef, useState } from "react";

export const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionIcon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );

    setRotateState(
      setActive === "active" ? "accordionIcon" : "accordionIcon rotate"
    );
  }

  return (
    <div className={`accordionSection ${setActive}`}>
      <button className="accordion" onClick={toggleAccordion}>
        <p className="accordionTitle">{props.title}</p>
        <i  className={`bx bx-chevron-right ${setRotate}`} />
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >

        <div className="accordionText">
          <ul>
            {
              props.content.map((programOption) => {
                return(
                  <li key={programOption.id} className="radioWrap">
                    <input
                      type="radio"
                      id={programOption.for}
                      name="programOption"
                      onChange={props.handleProgramOption}
                      value={programOption.name}
                    />
                    <label htmlFor={programOption.for}>
                      <span>{programOption.name}</span>
                    </label>
                  </li>
                )
              })
            }
          </ul>

          <button>See more</button>
        </div>
      </div>
    </div>
  );
};
