import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="mt-4 text-lg text-gray-600">
        Edit <code className="bg-gray-100 px-2 py-1 rounded">src/routes/index.tsx</code> to get started.
      </p>
    </div>
  )
}
