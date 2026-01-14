export function FormatMoney(AmountInCents) {
  return `${(AmountInCents / 100).toFixed(2)}`;
}
