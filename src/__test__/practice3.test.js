import fetchMock from "fetch-mock";
import { getPoetry1, getPoetry2 } from "../practice3";

fetchMock.mock("https://v1.jinrishici.com/all.json", {
  content: "天清一雁远，海阔孤帆迟。",
  origin: "送张舍人之江东",
  author: "李白",
  category: "古诗文-抒情-离别",
});

test("properties on kevin and winnie expected", async () => {
  // eslint-disable-next-line no-undef
  const result = await getPoetry1();
  expect(result).toEqual([
    "送张舍人之江东",
    "李白",
    "天清一雁远，海阔孤帆迟。",
  ]);
});

test("use anothor methid properties on kevin and winnie expected", async () => {
  // eslint-disable-next-line no-undef
  const result = await getPoetry2();
  expect(result).toEqual([
    "送张舍人之江东",
    "李白",
    "天清一雁远，海阔孤帆迟。",
  ]);
});
