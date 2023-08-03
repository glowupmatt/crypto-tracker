export const createTimeLabels = (data: number, chartContext: string) => {
  const date = new Date(data * 1000);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  if (chartContext === "24h") {
    return `${timeString.replace(":00", "")}`;
  } else if (chartContext === "7d" || chartContext === "30d") {
    return `${dateString.slice(0, -5)}`;
  } else {
    return `${dateString}`;
  }
};
