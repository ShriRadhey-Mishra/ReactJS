import TabButton from "./TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";

export default function Examples() {
    const [ selectTopic, setSelectedTopic ] = useState();

    function onSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectTopic);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectTopic].code}</code>
            </pre>
        </div>);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={ selectTopic === "components" } onSelect={() => onSelect("components")}>Components</TabButton>
                <TabButton isSelected={ selectTopic === "jsx" } onSelect={() => onSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={ selectTopic === "props" } onSelect={() => onSelect("props")}>Props</TabButton>
                <TabButton isSelected={ selectTopic === "state" } onSelect={() => onSelect("state")}>State</TabButton>
            </menu>
            { tabContent }
        </section>
    );
}