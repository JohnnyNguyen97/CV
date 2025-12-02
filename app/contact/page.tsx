export default function ContactPage() {
  return (
    <main className="w-full flex flex-col items-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-wide mb-4 text-blue-400">
        CONTACT ME
      </h1>

      <p className="text-zinc-400 max-w-2xl mb-12">
        Feel free to reach out for inquiries, collaborations, or questions.
      </p>

      <form className="w-full max-w-2xl space-y-6 text-left">
        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="col-span-1 bg-blue-900/30 text-blue-800 px-4 py-2 font-semibold rounded-md">
            NAME:
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="col-span-2 border border-blue-700/40 px-4 py-2 bg-black/40 text-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-start">
          <label className="col-span-1 bg-blue-900/30 text-blue-800 px-4 py-2 font-semibold rounded-md">
            EMAIL:
          </label>
          <div className="col-span-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-blue-700/40 px-4 py-2 bg-black/40 text-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-xs text-blue-300/70 mt-1">
              Please use a valid email so I can respond.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <label className="col-span-1 bg-blue-900/30 text-blue-800 px-4 py-2 font-semibold rounded-md">
            SUBJECT:
          </label>
          <input
            type="text"
            placeholder="What is this regarding?"
            className="col-span-2 border border-blue-700/40 px-4 py-2 bg-black/40 text-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-start">
          <label className="col-span-1 bg-blue-900/30 text-blue-800 px-4 py-2 font-semibold rounded-md">
            MESSAGE:
          </label>
          <textarea
            placeholder="Write your message..."
            className="col-span-2 border border-blue-700/40 px-4 py-2 h-40 bg-black/40 text-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            className="w-4 h-4 border border-blue-700 bg-black/40 rounded-sm"
          />
          <label className="text-sm font-semibold text-blue-300">
            SEND ME A COPY OF THIS EMAIL
          </label>
        </div>

        <button
          type="submit"
          className="
            mt-6
            px-6 py-3 
            font-semibold 
            rounded-md 
            text-black
            bg-gradient-to-r from-blue-400 to-blue-600 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
            transition-all
          "
        >
          SEND MESSAGE
        </button>
      </form>
    </main>
  );
}
