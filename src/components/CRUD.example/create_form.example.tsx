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
    <form onSubmit={handleSubmit}>
      <label>
        Title :
        <input type="text" name="title" />
      </label>
      <label>
        Content :
        <input type="text" name="content" />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
