export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="textfield/_outlined-text-field.scss -bold">Key Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <ul className="list-disc list-inside">
            <li>C programming</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>Data structures (Java)</li>
            <li>Spring Boot</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Others</h3>
          <ul className="list-disc list-inside">
            <li>Eclipse</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

