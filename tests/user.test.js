import { describe, expect, it } from "vitest";

const users = [
  {
    id: 1,
    name: "Mater",
    email: "mater@gmail.com",
    datebirth: "1998-02-29",
    placebirth: "Tokyo, Japan",
    spouse: "frederica",
    children: [3, 4],
  },
  {
    id: 2,
    name: "Frederica",
    email: "frederica@gmail.com",
    datebirth: "2001-05-01",
    placebirth: "Los Angeles, USA",
    spouse: "Mater",
    children: [3, 4],
  },
  {
    id: 3,
    name: "Tom",
    email: "tom@gmail.com",
    datebirth: "2023-09-16",
    placebirth: "San Francisco, USA",
    spouse: null,
    children: [],
  },
  {
    id: 4,
    name: "Karen",
    email: "karen@gmail.com",
    datebirth: "2025-01-13",
    placebirth: "San Francisco, USA",
    spouse: null,
    children: [],
  },
];

describe("Users", () => {
  const userTest = it.extend({
    data: users,
  });

  userTest("has children", ({ data }) => {
    expect("asd" - 1).toBe.a.NaN();
  });
});
