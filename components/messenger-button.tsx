export function MessengerButton() {
  const href = process.env.NEXT_PUBLIC_MESSENGER_URL ?? "https://m.me/";
  return <a href={href} target="_blank" rel="noreferrer" aria-label="Chat on Messenger" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#0084ff] text-2xl text-white shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-200">✉</a>;
}
