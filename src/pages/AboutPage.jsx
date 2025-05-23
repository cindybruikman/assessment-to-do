export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4 border-b border-green-600 pb-2">
        About This App
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        This task management app was created as part of an assessment project.
        It&apos;s designed to help users easily track and organize their tasks
        in a simple, user-friendly interface.
      </p>
      <p className="text-lg leading-relaxed text-gray-300">
        The app uses React and Tailwind CSS, with a custom global state system
        for managing todos. You can add, edit, and delete tasks.
      </p>
    </div>
  );
}
