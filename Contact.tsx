export default function Contact() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p>vivekanbu96@gmail.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p>8189945902</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/vivek-anbu-556511332" className="text-blue-600 hover:text-blue-800">vivek-anbu-556511332</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Take u Forward (TUF id)</h3>
          <a href="https://takeuforward.org/profile/vivekanbu" className="text-blue-600 hover:text-blue-800">vivekanbu</a>
        </div>
      </div>
    </section>
  )
}

