import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">A.Vivek</h1>
        <nav>
          <Link href="https://www.linkedin.com/in/vivek-anbu-556511332" className="mr-4 text-blue-600 hover:text-blue-800">LinkedIn</Link>
          <Link href="https://leetcode.com/u/VK2696/" className="text-blue-600 hover:text-blue-800">LeetCode</Link>
        </nav>
      </div>
    </header>
  )
}

