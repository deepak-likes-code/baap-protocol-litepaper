import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                BAAP
              </Link>
            </div>
            <div className="ml-6 flex space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Home
              </Link>
              <Link href="/litepaper" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Litepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

