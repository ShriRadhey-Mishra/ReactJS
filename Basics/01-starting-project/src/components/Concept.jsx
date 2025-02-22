import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts/CoreConcepts.jsx";

export default function Concept() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=> <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    );
}