import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js"
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx"
import { EXAMPLES } from "./data-with-examples";

function App() {
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
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem)=> <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
                    </ul>
                </section>
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
            </main>
        </div>
    );
}

export default App;



