export async function GET(request) {
  // odczyt listy zadań — bezpieczne, idempotentne
  return Response.json({ zadania: [] });
}

export async function POST(request) {
  const dane = await request.json();
  // utworzenie nowego zadania — nieidempotentne
  return Response.json({ id: 1, ...dane }, { status: 201 });
}

export async function PUT(request) {
  const dane = await request.json();
  // pełna aktualizacja zadania o danym id — idempotentne
  return Response.json(dane);
}

export async function DELETE(request) {
  // usunięcie zadania — idempotentne
  return new Response(null, { status: 204 });
}