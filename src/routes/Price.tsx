import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface PriceProps {
  coinId: string;
}
interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  const { isLoading, data } = useQuery<IHistory[]>(
    ["price", coinId],
    () => fetchCoinHistory(coinId),
    {
      //refetchInterval:5000,
    }
  );

  //console.log(new Date(data.time_close * 1000).toISOString());
  return (
    <h1>
      {month}월{day}일<br />
      최고가(KRW) : {}
      {data
        ?.slice(20, 21)
        .map((price) => parseFloat(price.high) * 1319.43)}{" "}
      <br />
      최저가(KRW) : {}
      {data?.slice(20, 21).map((price) => parseFloat(price.low) * 1319.43)}
    </h1>
  );
}
export default Price;
