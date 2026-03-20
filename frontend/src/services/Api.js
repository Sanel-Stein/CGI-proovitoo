
export async function getLauad() {
  const res = await fetch(`api/laud`)
  return res.json()
}

export async function getBroneeringud(aeg) {
  const res = await fetch(`api/broneering/otsing?broneeringuAlgus=${aeg}`)
  return res.json()
}

export async function addBroneering(broneering) {
  const res = await fetch(`api/broneering`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(broneering)
  })
  return res.json()
}