
export default async function SzukajPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q?.trim() || '';

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Wyszukiwarka</h1>

      <form action="/szukaj" method="GET">
        <input
          name="q"
          type="search"
          defaultValue={query}
          placeholder="Czego szukasz?"
        />

        <button type="submit">
          Szukaj
        </button>
      </form>

      {query ? (
        <p>
          Wyniki dla frazy: <strong>{query}</strong>
        </p>
      ) : (
        <p>Wpisz frazę, aby rozpocząć wyszukiwanie.</p>
      )}
    </main>
  );
}
