
export async function getLauad() {
  const res = await fetch(`api/laud`)
  return res.json()
}

export async function addLaud(laud) {
  const res = await fetch(`api/laud`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(laud)
  })
  return res.json()
}