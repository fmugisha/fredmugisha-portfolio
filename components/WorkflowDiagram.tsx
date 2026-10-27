import styles from "./WorkflowDiagram.module.css";

const inputs = [
  { y: 22, label: "messy inbox" },
  { y: 92, label: "raw spreadsheet" },
  { y: 162, label: "scattered notes" },
];

const inPaths = [
  "M98,35 C135,35 135,105 158,112",
  "M98,105 C128,105 132,112 158,115",
  "M98,175 C135,175 135,122 158,118",
];

const outPath = "M222,115 C248,115 252,115 272,115";

export default function WorkflowDiagram() {
  return (
    <div className={styles.flow} aria-hidden="true">
      <div className={styles.title}>
        <span>workflow.automation</span>
        <span className={styles.live}>
          <span className="dot" /> running
        </span>
      </div>
      <svg viewBox="0 0 360 230" className={styles.svg}>
        <defs>
          <marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" className={styles.arrow} />
          </marker>
        </defs>

        {/* inputs */}
        <g className={styles.inputText}>
          {inputs.map((input) => (
            <g key={input.label}>
              <rect x="6" y={input.y} width="92" height="26" rx="7" className={styles.box} />
              <text x="18" y={input.y + 16}>
                {input.label}
              </text>
            </g>
          ))}
        </g>

        {/* connectors in */}
        <g className={styles.connector} markerEnd="url(#arw)">
          {inPaths.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <circle r="3" className={styles.pulse}>
          <animateMotion dur="2.6s" repeatCount="indefinite" path={inPaths[1]} />
        </circle>

        {/* engine */}
        <rect x="158" y="86" width="64" height="58" rx="12" className={styles.engine} />
        <g className={styles.engineText} textAnchor="middle">
          <text x="190" y="110">AUTO</text>
          <text x="190" y="124">SYSTEM</text>
        </g>

        {/* connector out */}
        <path d={outPath} className={styles.connectorOut} markerEnd="url(#arw)" />
        <circle r="3" className={styles.pulse}>
          <animateMotion dur="2.6s" begin="1.3s" repeatCount="indefinite" path={outPath} />
        </circle>

        {/* output */}
        <rect x="272" y="80" width="82" height="70" rx="10" className={styles.output} />
        <g className={styles.outputText}>
          <text x="286" y="100">✓ sorted</text>
          <text x="286" y="116">✓ tracked</text>
          <text x="286" y="132">✓ automated</text>
        </g>
      </svg>
      <p className={styles.caption}>
        An example of the systems I set up. Inputs go in, order comes out, and nobody has to chase anything by
        hand.
      </p>
    </div>
  );
}
