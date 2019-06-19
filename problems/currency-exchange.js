// USA:CAN 1:2
// CAN:JAP 95:1
// USA:GER 1:2
// GER:KOR 1:2
// EUR:KOR 2:9

const DELIMITER = ':'
// key = currencyA:currencyB
// value = conversionFactor
// e.g. key: 'EUR:KOR', value: 9 / 2
const lookup = new Map()
// returns units of currencyB equivalent to `amount` units of currencyA
const convert = (currencyA, currencyB, amount, visited) => {
  if (visited === undefined) visited = new Map()
  if (visited.get([currencyA, currencyB].join(DELIMITER))) return null
  visited.set([currencyA, currencyB].join(DELIMITER), true)

  const foundFactor = lookup.get([currencyA, currencyB].join(DELIMITER))
  if (foundFactor !== undefined) return amount * foundFactor 

  const keys = Array.from(lookup.keys())
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const [currencyX, currencyY] = key.split(DELIMITER)
    if (currencyX !== currencyA) continue
    const factor = lookup.get(key)
    const amountInCurrencyY = amount * factor
    const amountInCurrencyB = convert(currencyY, currencyB, amountInCurrencyY, visited)
    if (amountInCurrencyB !== null) {
      // Save factor to lookup for direct lookup next time
      ingestConversion(currencyA, currencyB, amount, amountInCurrencyB)
      return amountInCurrencyB 
    }
  }

  return null
}

const ingestConversion = (currencyA, currencyB, aFactor, bFactor) => {
  lookup.set([currencyA, currencyB].join(DELIMITER), bFactor / aFactor)
  lookup.set([currencyB, currencyA].join(DELIMITER), aFactor / bFactor)
}

ingestConversion('USA', 'CAN', 1, 2)
ingestConversion('CAN', 'JAP', 95, 1)
ingestConversion('EUR', 'KOR', 2, 9)
console.log(lookup)

console.log(`Expected ${convert('USA', 'CAN', 2)} to eq 4`)
console.log(`Expected ${convert('USA', 'JAP', 95)} to eq 2`)
console.log(`Expected ${convert('JAP', 'USA', 2)} to eq 95`)
console.log(`Expected ${convert('USA', 'EUR', 1)} to eq null`)

const dumbLookup = new Map()

const eagerIngestConversion = (currencyA, currencyB, aFactor, bFactor) => {
  dumbLookup.set([currencyA, currencyB].join(DELIMITER), bFactor / aFactor)
  dumbLookup.set([currencyB, currencyA].join(DELIMITER), aFactor / bFactor)
  dumbLookup.forEach((factor, key) => {

  })
}