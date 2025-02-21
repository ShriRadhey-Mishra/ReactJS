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
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => onSelect("components")}>Components</TabButton>
                        <TabButton onSelect={() => onSelect("jsx")}>JSX</TabButton>
                        <TabButton onSelect={() => onSelect("props")}>Props</TabButton>
                        <TabButton onSelect={() => onSelect("state")}>State</TabButton>
                    </menu>
                    { !selectTopic ? <p>Please select a topic.</p>: null }
                    { selectTopic && (<div id="tab-content">
                        <h3>{EXAMPLES[selectTopic].title}</h3>
                        <p>{EXAMPLES[selectTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectTopic].code}</code>
                        </pre>
                    </div>) }

                </section>
            </main>
        </div>
    );
}

export default App;



