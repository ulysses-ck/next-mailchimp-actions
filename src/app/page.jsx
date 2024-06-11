import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <form className="flex flex-col gap-2">
        <label htmlFor="email" className="flex gap-2 items-center">
          <span>Email:</span>
          <input
            type="email"
            id="email"
            autoCapitalize="off"
            autoComplete="email"
            autoCorrect="off"
            placeholder="john@doe.com"
            className="focus:outline-none border border-blue-300 p-2"
          ></input>
        </label>
        <button type="submit" className="border border-blue-800">Add contact</button>
      </form>
    </main>
  );
}
