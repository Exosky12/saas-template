export const CreateExampleForm = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const response = await fetch("api/crud.example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });

    if (!response.ok) {
      console.error("Create fail");
    } else {
      console.log("Create succes");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 m-4 rounded shadow-md"
    >
      <label className="block">
        <span className="text-gray-700">Title :</span>
        <input
          type="text"
          name="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Content :</span>
        <input
          type="text"
          name="content"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Create
      </button>
    </form>
  );
};
